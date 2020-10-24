import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="col-md-5 col-lg-3 sidebar">
        <div className="card-left-bahasa bg-light">
          <div className="container">
            <div className="link-card-left-bahasa">
              <Link href="/carilowongan">
                <i className="fas fa-search" />
                Cari Lowongan
              </Link>
              <Link href="/editprofile">
                <i className="fas fa-user" />
                Edit Profile
              </Link>
              <Link href="/lamaranterkirim">
                <i className="fas fa-paper-plane" />
                Lamaran Terkirim
              </Link>
              <Link href="/undanganinterview">
                <i className="fas fa-info-circle" />
                Undangan Interview
              </Link>
              <Link href="/jadwalinterview">
                <i className="fas fa-calendar-day" />
                Jadwal Interview
              </Link>
              <Link href="/lamarantersimpan">
                <i className="fas fa-archive" />
                Lamaran Tersimpan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
