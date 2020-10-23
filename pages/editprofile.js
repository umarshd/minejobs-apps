import React from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import EditProfilePage from "../components/dashboard/EditProfilePage";

export default function editprofile() {
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <EditProfilePage />
          </div>
        </div>
      </main>
    </>
  );
}
