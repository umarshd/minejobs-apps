import Head from "next/head";
import React from "react";
import DashboardCompanyPage from "../../../components/company/dashboard/DashboardCompanyPage";
import HeaderDashboardCompany from "../../../components/layouts/company/dashboard/HeaderDashboardCompany";

export default function company() {
  return (
    <>
      <Head>
        <title>Dashboard - Company </title>
      </Head>
      <HeaderDashboardCompany />
      <main>
        <div className="container">
          <div className="row">
            <DashboardCompanyPage />
          </div>
        </div>
      </main>
    </>
  );
}
