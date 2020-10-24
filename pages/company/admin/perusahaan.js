import React from "react";
import Head from "next/head";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";
import PerusahaanPage from "../../../components/company/admin/PerusahaanPage";

export default function perusahaan() {
  return (
    <>
      <Head>
        <title>Admin Perusahaan</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <PerusahaanPage />
          </div>
        </div>
      </main>
    </>
  );
}
