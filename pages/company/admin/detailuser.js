import Head from "next/head";
import React from "react";
import DetailUserPage from "../../../components/company/admin/DetailUserPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function detailuser() {
  return (
    <>
      <Head>
        <title>Detail User</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <DetailUserPage />
          </div>
        </div>
      </main>
    </>
  );
}
