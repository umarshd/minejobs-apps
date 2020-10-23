import React from "react";
import Head from "next/head";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/Sidebar";
import BahasaPage from "../../components/dashboard/BahasaPage";

export default function bahasa() {
  return (
    <>
      <Head>
        <title>Bahasa</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <BahasaPage />
          </div>
        </div>
      </main>
    </>
  );
}
