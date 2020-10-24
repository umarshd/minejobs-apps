import React from "react";
import Head from "next/head";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";
import CompanyDetailsPage from "../components/dashboard/CompanyDetailsPage";

export default function companydetails() {
  return (
    <>
      <Head>
        <title>Company Details</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <CompanyDetailsPage />
          </div>
        </div>
      </main>
    </>
  );
}
