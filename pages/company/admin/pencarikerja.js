import Head from "next/head";
import React from "react";
import PencariKerjaPage from "../../../components/company/admin/PencariKerjaPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function pencarikerja() {
  return (
    <>
      <Head>
        <title>Pencari Kerja</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <PencariKerjaPage />
          </div>
        </div>
      </main>
    </>
  );
}
