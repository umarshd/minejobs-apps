import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import PreferensiPekerjaanPage from "../../components/dashboard/profile/PreferensiPekerjaanPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function preferensipekerjaan() {
  const { token, uid } = useContext(UserContext);

  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    gaji_diharapkan: "",
    provinsi: "",
    kota: "Test",
    bidang_pekerjaan: "Test",
  });

  useEffect(() => {
    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/preferensi-pekerjaan/" + uid
    }`;

    axios({
      url: API,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/preferensi-pekerjaan"
    }`;

    axios({
      url: API,
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id_kandidat: uid,
        gaji_diharapkan: form.gaji_diharapkan,
        provinsi: form.provinsi,
        kota: form.kota,
        bidang_pekerjaan: form.bidang_pekerjaan,
      },
    })
      .then((res) => {
        MySwal.fire({
          icon: "success",
          title: "Data Tersimpan",
          text: "Data diri yang Anda masukan telah tersimpan",
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/preferensi-pekerjaan/" + uid
    }`;

    axios({
      url: API,
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id_kandidat: uid,
        gaji_diharapkan: getGajiDiharapkan,
        provinsi: getProvinsi,
        kota: "semarang",
        bidang_pekerjaan: "teknologi di edit",
      },
    })
      .then((res) => {
        MySwal.fire({
          icon: "success",
          title: "Data Terupdate",
          text: "Data diri yang Anda masukan telah terupdate",
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  let setGajiDiharapkan = form.gaji_diharapkan
    ? form.gaji_diharapkan
    : data.map((item) => item.gaji_diharapkan);

  let getGajiDiharapkan = setGajiDiharapkan.toString();

  let setProvinsi = form.provinsi
    ? form.provinsi
    : data.map((item) => item.provinsi);

  let getProvinsi = setProvinsi.toString();

  console.log("Form input", form);
  console.log("Data", data);

  return (
    <>
      <Head>
        <title>Preferensi Pekerjaan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <PreferensiPekerjaanPage
              data={data}
              handleChange={handleChange}
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </main>
    </>
  );
}
