import React, { useContext, useEffect, useState } from "react";
import DataDiriPage from "../../components/dashboard/profile/DataDiriPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import Head from "next/head";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function datadiri() {
  const { token, uid } = useContext(UserContext);
  const [form, setForm] = useState({
    nama_depan: null,
    nama_belakang: null,
    nomor_telepon: null,
    provinsi: null,
    kota: null,
    tentang: null,
    foto_profile: null,
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/data-pribadi/post"}`;

    axios({
      url: API,
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id_kandidat: uid,
        nama_depan: form.nama_depan,
        nama_belakang: form.nama_belakang,
        nomor_telepon: form.nomor_telepon,
        provinsi: form.provinsi,
        kota: form.kota,
        tentang: form.tentang,
        foto_profile: form.foto_profile,
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
      process.env.NEXT_PUBLIC_ENDPOINT + "api/data-pribadi/" + uid
    }`;

    axios({
      url: API,
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id_kandidat: uid,
        nama_depan: getNamaDepan,
        nama_belakang: getNamaBelakang,
        nomor_telepon: getNomorTelepon,
        provinsi: getProvinsi,
        kota: getKota,
        tentang: getTentang,
        foto_profile: getFotoProfile,
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

  let setNamaDepan = form.nama_depan
    ? form.nama_depan
    : data.map((item) => item.nama_depan);

  let getNamaDepan = setNamaDepan.toString();

  let setNamaBelakang = form.nama_belakang
    ? form.nama_belakang
    : data.map((item) => item.nama_belakang);

  let getNamaBelakang = setNamaBelakang.toString();

  let setNomorTelepon = form.nomor_telepon
    ? form.nomor_telepon
    : data.map((item) => item.nomor_telepon);

  let getNomorTelepon = setNomorTelepon.toString();

  let setProvinsi = form.provinsi
    ? form.provinsi
    : data.map((item) => item.provinsi);

  let getProvinsi = setProvinsi.toString();

  let setKota = form.kota ? form.kota : data.map((item) => item.kota);

  let getKota = setKota.toString();

  let setTentang = form.tentang
    ? form.tentang
    : data.map((item) => item.tentang);

  let getTentang = setTentang.toString();

  let setFotoProfile = form.foto_profile
    ? form.foto_profile
    : data.map((item) => item.foto_profile);

  let getFotoProfile = setFotoProfile.toString();

  useEffect(() => {
    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/data-pribadi/" + uid
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

  return (
    <>
      <Head>
        <title>Data Diri</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <DataDiriPage
              data={data}
              form={form}
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
