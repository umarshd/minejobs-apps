import Head from "next/head";
import React from "react";
import TambahAdminPage from "../../../components/company/admin/TambahAdminPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function tambahadmin() {
  return (
    <>
      <Head>
        <title>Tambah Admin</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <TambahAdminPage />
          </div>
        </div>
      </main>
    </>
  );
}
