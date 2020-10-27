import Head from "next/head";
import React from "react";
import IklanLowonganTerpasangPage from "../../../components/company/dashboard/IklanLowonganTerpasangPage";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";

export default function iklanlowonganterpasang() {
  return (
    <>
      <Head>
        <title>Iklan Lowongan Terpasang</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <IklanLowonganTerpasangPage />
          </div>
        </div>
      </main>
    </>
  );
}
