import React from "react";
import Head from "next/head";

import HeaderCompanyPage from "../components/layouts/company/HeaderCompanyPage";
import CompanyPage from "../components/company/CompanyPage";

export default function company() {
  return (
    <>
      <Head>
        <title>Minejobs</title>
      </Head>
      <HeaderCompanyPage />
      <main>
        <div className="container">
          <div className="row">
            <CompanyPage />
          </div>
        </div>
      </main>
    </>
  );
}
