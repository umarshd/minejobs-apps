import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const UserContext = createContext(null);

export default function User({ children }) {
  const token = Cookies.get("token");
  const uid = Cookies.get("uid");

  const [user, setUser] = useState([]);

  useEffect(() => {
    const API = `${
      process.env.NEXT_PUBLIC_ENDPOINT + "/api/data-pribadi/" + uid
    }`;

    axios({
      url: API,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUser(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = (e) => {
    Cookies.remove("token");
    Cookies.remove("uid");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, token, uid, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
