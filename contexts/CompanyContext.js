import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const CompanyContext = createContext(null);

export default function Company({ children }) {
  const tokenCompany = Cookies.get("tokenCompany");
  const cid = Cookies.get("cid");
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "/api/perusahaan/getuser"
    }`;

    axios({
      url: API,
      method: "GET",
      headers: {
        authorization: `Bearer ${
          tokenCompany ? tokenCompany.slice(0, -1) : null
        }`,
      },
    })
      .then((res) => {
        setCompany(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = (e) => {
    Cookies.remove("tokenCompany");
    Cookies.remove("cid");
    window.location.href = "/";
  };
  return (
    <CompanyContext.Provider
      value={{ company, tokenCompany, cid, handleLogout }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
