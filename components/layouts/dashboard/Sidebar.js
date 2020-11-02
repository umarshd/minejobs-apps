import React, { useContext } from "react";
import Link from "next/link";

import { UserContext } from "../../../contexts/UserContext";

export default function Sidebar() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="col-md-5 col-lg-3 sidebar">
        <div className="card-left-bahasa bg-light">
          <div className="container">
            <div className="link-card-left-bahasa">
              <Link href="/carilowongan">
                <a>
                  <i className="fas fa-search" />
                  Cari Lowongan
                </a>
              </Link>
              <Link href="/editprofile">
                <a>
                  <i className="fas fa-user" />
                  Edit Profile
                </a>
              </Link>
              <Link href="/lamaranterkirim">
                <a>
                  <i className="fas fa-paper-plane" />
                  Lamaran Terkirim
                </a>
              </Link>
              <Link href="/undanganinterview">
                <a>
                  <i className="fas fa-info-circle" />
                  Undangan Interview
                </a>
              </Link>
              <Link href="/jadwalinterview">
                <a>
                  <i className="fas fa-calendar-day" />
                  Jadwal Interview
                </a>
              </Link>
              <Link href="/lamarantersimpan">
                <a>
                  <i className="fas fa-archive" />
                  Lamaran Tersimpan
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
