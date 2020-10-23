import React from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import JadwalInterviewPage from "../components/dashboard/JadwalInterviewPage";

export default function jadwalinterview() {
  return (
    <>
      <Head>
        <title>Jadwal Interview</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <JadwalInterviewPage />
          </div>
        </div>
      </main>
    </>
  );
}
