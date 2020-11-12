import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import BahasaPage from "../../components/dashboard/profile/BahasaPage";

export default function bahasa() {
  const [loop, setLoop] = useState({
    data: 1,
  });

  const handleIncrement = (e) => {
    setLoop({
      ...loop,
      data: loop.data + 1,
    });
  };

  const handleDecrement = (e) => {
    setLoop({
      ...loop,
      data: loop.data - 1,
    });
  };

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
            <BahasaPage
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              loop={loop}
            />
          </div>
        </div>
      </main>
    </>
  );
}
