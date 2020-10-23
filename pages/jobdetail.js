import React from "react";
import Head from "next/head";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";
import JobDetailPage from "../components/dashboard/JobDetailPage";

export default function jobdetail() {
  return (
    <>
      <Head>
        <title>Job Detail</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <JobDetailPage />
          </div>
        </div>
      </main>
    </>
  );
}
