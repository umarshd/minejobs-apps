import Head from "next/head";
import React from "react";
import PendidikanPage from "../../components/dashboard/PendidikanPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";

export default function pendidikan() {
  return (
    <>
      <Head>
        <title>Pendidikan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <PendidikanPage />
          </div>
        </div>
      </main>
    </>
  );
}
