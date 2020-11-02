import React, { useContext } from "react";

import Link from "next/link";
import { UserContext } from "../../../../contexts/UserContext";

export default function SidebarProfile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="col-md-5 col-lg-3">
        <div className="card-left-bahasa">
          <div className="container">
            <div className="profile">
              <img
                height={64}
                width={64}
                className="rounded-circle"
                src="https://images.unsplash.com/photo-1602101423709-aa7237edce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt=""
                srcSet
              />
              <h5>{user.map((item) => item.nama_depan)}</h5>
              <a href>Lihat Profile</a>
              <hr />
            </div>
            <div className="link-card-left-bahasa">
              <Link href="/profile/pengalaman">
                <a>
                  <i className="fas fa-briefcase" />
                  Pengalaman
                </a>
              </Link>
              <Link href="/profile/pendidikan">
                <a>
                  <i className="fas fa-user-graduate" />
                  Pendidikan
                </a>
              </Link>
              <Link href="/profile/keahlian">
                <a>
                  <i className="fas fa-poll-h" />
                  Keahlian
                </a>
              </Link>
              <Link href="/profile/bahasa">
                <a>
                  <i className="fas fa-globe" />
                  Bahasa
                </a>
              </Link>
              <Link href="/profile/preferensipekerjaan">
                <a>
                  <i className="fas fa-clone" />
                  Preferensi Pekerjaan
                </a>
              </Link>
              <Link href="/profile/datadiri">
                <a>
                  <i className="fas fa-address-card" />
                  Data Diri
                </a>
              </Link>
              <Link href="/profile/unggahresume">
                <a>
                  <i className="fas fa-cloud-upload-alt" />
                  Unggah Resume
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
