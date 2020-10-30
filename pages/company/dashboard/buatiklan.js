import React from "react";
import Head from "next/head";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";
import BuatIklanPage from "../../../components/company/dashboard/BuatIklanPage";

export default function buatiklan() {
  return (
    <>
      <Head>
        <title>Buat Iklan</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <BuatIklanPage />
          </div>
        </div>
      </main>
    </>
  );
}
