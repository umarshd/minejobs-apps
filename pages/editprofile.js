import React, { useContext, useState } from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import EditProfilePage from "../components/dashboard/EditProfilePage";
import { UserContext } from "../contexts/UserContext";

export default function editprofile() {
  const { user, token, uid } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} user={user} />
            <EditProfilePage user={user} />
          </div>
        </div>
      </main>
    </>
  );
}
