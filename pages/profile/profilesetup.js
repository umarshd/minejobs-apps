import Head from "next/head";
import React from "react";
import ProfileSetupPage from "../../components/dashboard/ProfileSetupPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";

export default function profilesetup() {
  return (
    <>
      <Head>
        <title>Profile Setup</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <ProfileSetupPage />
          </div>
        </div>
      </main>
    </>
  );
}
