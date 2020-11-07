import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import CariLowonganPage from "../components/dashboard/CariLowonganPage";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function carilowongan() {
  const { token, uid } = useContext(UserContext);
  const [filter, setFilter] = useState({
    query: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/cari-iklan"}`;
    axios({
      url: API,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter.query]);

  const handleFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const submitFilter = (e) => {
    e.preventDefault();
    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "api/cari-iklan?q=" + filter.query
    }`;
    axios({
      url: API,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("Data", data);
  console.log("Filter", filter);
  return (
    <>
      <Head>
        <title>Cari Lowongan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <CariLowonganPage
              data={data}
              handleFilter={handleFilter}
              submitFilter={submitFilter}
            />
          </div>
        </div>
      </main>
    </>
  );
}
