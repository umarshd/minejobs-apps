import Head from "next/head";
import React from "react";
import PengalamanPage from "../../components/dashboard/PengalamanPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";

export default function pengalaman() {
  return (
    <>
      <Head>
        <title>Pengalaman</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <PengalamanPage />
          </div>
        </div>
      </main>
    </>
  );
}
