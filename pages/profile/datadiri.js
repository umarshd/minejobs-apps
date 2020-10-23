import React from "react";
import DataDiriPage from "../../components/dashboard/profile/DataDiriPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import Head from "next/head";

export default function datadiri() {
  return (
    <>
      <Head>
        <title>Data Diri</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <DataDiriPage />
          </div>
        </div>
      </main>
    </>
  );
}
