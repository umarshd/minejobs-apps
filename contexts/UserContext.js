import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

export default function User({ children }) {
  const token = Cookies.get("token");
  const uid = Cookies.get("uid");

  const [user, setUser] = useState(false);

  const handleLogout = (e) => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, setUser, token, uid, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
