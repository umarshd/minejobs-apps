import Head from "next/head";
import React from "react";
import LamaranTerkirimPage from "../components/dashboard/LamaranTerkirimPage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function lamaranterkirim() {
  return (
    <>
      <Head>
        <title>Lamaran Terkirim</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <LamaranTerkirimPage />
          </div>
        </div>
      </main>
    </>
  );
}
