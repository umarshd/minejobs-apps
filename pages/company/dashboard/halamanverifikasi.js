import React from "react";
import Head from "next/head";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";
import HalamanVerifikasiPage from "../../../components/company/dashboard/HalamanVerifikasiPage";

export default function halamanverifikasi() {
  return (
    <>
      <Head>
        <title>Halaman Verifikasi</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <HalamanVerifikasiPage />
          </div>
        </div>
      </main>
    </>
  );
}
