import React, { useContext, useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import axios from "axios";

import { CompanyContext } from "../contexts/CompanyContext";

import HeaderCompanyPage from "../components/layouts/company/HeaderCompanyPage";
import CompanyPage from "../components/company/CompanyPage";

export default function company() {
  const { tokenCompany, cid } = useContext(CompanyContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/perusahaan/register"
    }`;

    axios({
      url: API,
      method: "POST",
      data: {
        email: form.emailSignup,
        password: form.passwordSignup,
        password_confirmation: form.passwordSignup,
      },
    })
      .then((res) => {
        console.log(res);
        const userId = res.data.user;
        Cookies.set("tokenCompany", res.data.token, { expires: 7 });
        Cookies.set("cid", userId.id, { expires: 7 });
        window.location.href = "/company/dashboard/company";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/perusahaan/login"}`;

    axios({
      url: API,
      method: "POST",
      data: {
        email: form.emailLogin,
        password: form.passwordLogin,
        password_confirmation: form.passwordLogin,
      },
    })
      .then((res) => {
        const userId = res.data.user;
        Cookies.set("tokenCompany", res.data.token, { expires: 7 });
        Cookies.set("cid", userId.id, { expires: 7 });
        window.location.href = "/company/dashboard/company";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);
  return (
    <>
      <Head>
        <title>Minejobs</title>
      </Head>
      <HeaderCompanyPage
        handleChange={handleChange}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        loading={loading}
      />
      <main>
        <div className="container">
          <div className="row">
            <CompanyPage />
          </div>
        </div>
      </main>
    </>
  );
}
