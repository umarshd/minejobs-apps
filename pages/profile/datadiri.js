import React, { useContext, useState } from "react";
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
  const { user, token, uid } = useContext(UserContext);
  const [file, setFile] = useState({
    image: "",
  });
  const [form, setForm] = useState({
    nama_depan: null,
    nama_belakang: null,
    nomor_telepon: null,
    provinsi: null,
    kota: null,
    tentang: null,
    foto_profile: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFile({
      ...file,
      [e.target.name]: e.target.files[0],
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
        "Content-Type": "multipart/form-data",
      },
      data: {
        id_kandidat: uid,
        nama_depan: form.nama_depan,
        nama_belakang: form.nama_belakang,
        nomor_telepon: form.nomor_telepon,
        provinsi: form.provinsi,
        kota: form.kota,
        tentang: form.tentang,
        image: file.image,
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
        image: getFotoProfile,
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
    : user.map((item) => item.nama_depan);

  let getNamaDepan = setNamaDepan.toString();

  let setNamaBelakang = form.nama_belakang
    ? form.nama_belakang
    : user.map((item) => item.nama_belakang);

  let getNamaBelakang = setNamaBelakang.toString();

  let setNomorTelepon = form.nomor_telepon
    ? form.nomor_telepon
    : user.map((item) => item.nomor_telepon);

  let getNomorTelepon = setNomorTelepon.toString();

  let setProvinsi = form.provinsi
    ? form.provinsi
    : user.map((item) => item.provinsi);

  let getProvinsi = setProvinsi.toString();

  let setKota = form.kota ? form.kota : user.map((item) => item.kota);

  let getKota = setKota.toString();

  let setTentang = form.tentang
    ? form.tentang
    : user.map((item) => item.tentang);

  let getTentang = setTentang.toString();

  let setFotoProfile = file.image
    ? file.image
    : user.map((item) => item.foto_profile);

  let getFotoProfile = setFotoProfile.toString();

  console.log("File Image", file);

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
              user={user}
              form={form}
              handleChange={handleChange}
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
              handleFile={handleFile}
            />
          </div>
        </div>
      </main>
    </>
  );
}
