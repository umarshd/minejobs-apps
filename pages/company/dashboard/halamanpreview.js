import Head from "next/head";
import React from "react";
import HalamanPreviewPage from "../../../components/company/dashboard/HalamanPreviewPage";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";

export default function halamanpreview() {
  return (
    <>
      <Head>
        <title>Halaman Priview</title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <HalamanPreviewPage />
          </div>
        </div>
      </main>
    </>
  );
}
