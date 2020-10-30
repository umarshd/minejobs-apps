import Link from "next/link";
import React from "react";

export default function SidebarAdmin() {
  return (
    <>
      <div className="col-md-5 col-lg-3">
        <div className="card-left-bahasa bg-light">
          <div className="container">
            <div className="link-card-left-bahasa">
              <Link href="/company/admin/perusahaan">
                <a>
                  <i className="fas fa-search" />
                  Perusahaan
                </a>
              </Link>
              <Link href="/company/admin/pencarikerja">
                <a>
                  <i className="fas fa-user" />
                  Pencari Kerja
                </a>
              </Link>
              <Link href="/company/admin/aturiklan">
                <a>
                  <i className="fas fa-paper-plane" />
                  Atur Iklan
                </a>
              </Link>
              <Link href="#">
                <a>
                  <i className="fas fa-info-circle" />
                  Request Credit
                </a>
              </Link>
              <Link href="/company/admin/tambahadmin">
                <a>
                  <i className="fas fa-calendar-day" />
                  Tambah Admin
                </a>
              </Link>
              <Link href="#">
                <a>
                  <i className="fas fa-archive" />
                  Ganti Password
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
