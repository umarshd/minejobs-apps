import Head from "next/head";
import React from "react";
import SemuaKandidatPage from "../../../components/company/dashboard/SemuaKandidatPage";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";

export default function semuakandidat() {
  return (
    <>
      <Head>
        <title>Semua Kandidat</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <SemuaKandidatPage />
          </div>
        </div>
      </main>
    </>
  );
}
