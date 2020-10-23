import Head from "next/head";
import React from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import LamarPekerjaanPage from "../components/dashboard/LamarPekerjaanPage";

export default function lamarpekerjaan() {
  return (
    <>
      <Head>
        <title>Lamar Pekerjaan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <LamarPekerjaanPage />
          </div>
        </div>
      </main>
    </>
  );
}
