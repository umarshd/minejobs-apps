import React from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import DetailUndanganPage from "../components/dashboard/DetailUndanganPage";

export default function detailundanganinterview() {
  return (
    <>
      <Head>
        <title>Detail Undangan</title>
      </Head>

      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <DetailUndanganPage />
          </div>
        </div>
      </main>
    </>
  );
}
