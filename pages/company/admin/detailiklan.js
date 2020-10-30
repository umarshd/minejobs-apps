import Head from "next/head";
import React from "react";
import DetailIklanPage from "../../../components/company/admin/DetailIklanPage";

import HeaderAdmin from "../../../components/layouts/company/admin/HeaderAdmin";
import SidebarAdmin from "../../../components/layouts/company/admin/SidebarAdmin";

export default function detailiklan() {
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
            <DetailIklanPage />
          </div>
        </div>
      </main>
    </>
  );
}
