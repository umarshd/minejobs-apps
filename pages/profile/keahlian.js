import Head from "next/head";
import React from "react";
import KeahlianPage from "../../components/dashboard/profile/KeahlianPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";

export default function keahlian() {
  return (
    <>
      <Head>
        <title>Keahlian</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <KeahlianPage />
          </div>
        </div>
      </main>
    </>
  );
}
