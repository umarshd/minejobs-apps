import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import PreferensiPekerjaanPage from "../../components/dashboard/profile/PreferensiPekerjaanPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function preferensipekerjaan() {
  const { token, uid } = useContext(UserContext);

  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    gaji_diharapkan: "",
    provinsi: "",
    kota: "",
    bidang_pekerjaan: "",
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
        setData(res.data);
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
        gaji_diharapkan: form.gaji_diharapkan,
        provinsi: form.provinsi,
        kota: form.kota,
        bidang_pekerjaan: form.bidang_pekerjaan,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

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
            />
          </div>
        </div>
      </main>
    </>
  );
}
