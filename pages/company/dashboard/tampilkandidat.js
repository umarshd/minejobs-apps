import Head from "next/head";
import React from "react";
import TampilKandidatPage from "../../../components/company/dashboard/TampilKandidatPage";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";

export default function tampilkandidat() {
  return (
    <>
      <Head>
        <title>Tampil Kandidat</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <TampilKandidatPage />
          </div>
        </div>
      </main>
    </>
  );
}
