import Head from "next/head";
import React from "react";
import DetailPerusahaanPage from "../../../components/company/admin/DetailPerusahaanPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function detailperusahaan() {
  return (
    <>
      <Head>
        <title>Detail Perusahaan</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <DetailPerusahaanPage />
          </div>
        </div>
      </main>
    </>
  );
}
