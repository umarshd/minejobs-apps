import Head from "next/head";
import React from "react";
import AturIklanPage from "../../../components/company/admin/AturIklanPage";
import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function aturiklan() {
  return (
    <>
      <Head>
        <title>List Iklan</title>
      </Head>
      <HeaderAdmin />
      <main>
        <div className="container">
          <div className="row">
            <SidebarAdmin />
            <AturIklanPage />
          </div>
        </div>
      </main>
    </>
  );
}
