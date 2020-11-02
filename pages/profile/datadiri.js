import React, { useContext, useEffect, useState } from "react";
import DataDiriPage from "../../components/dashboard/profile/DataDiriPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import Head from "next/head";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function datadiri() {
  const { token, uid } = useContext(UserContext);
  const [form, setForm] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/data-pribadi/1"}`;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/data-pribadi/1"}`;

    axios({
      url: API,
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id_kandidat: 1,
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);
  console.log(data);

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
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
    </>
  );
}
