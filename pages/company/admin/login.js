import Head from "next/head";
import React from "react";
import LoginPage from "../../../components/company/admin/LoginPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";

export default function login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row justify-content-center mb-5 mt-5">
            <LoginPage />
          </div>
        </div>
      </main>
    </>
  );
}
