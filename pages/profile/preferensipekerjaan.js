import Head from "next/head";
import React from "react";
import PreferensiPekerjaanPage from "../../components/dashboard/PreferensiPekerjaanPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";

export default function preferensipekerjaan() {
  return (
    <>
      <Head>
        <title>Preferensi Pekerjaan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <PreferensiPekerjaanPage />
          </div>
        </div>
      </main>
    </>
  );
}
