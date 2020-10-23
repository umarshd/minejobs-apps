import React from 'react'

export default function SidebarProfile() {
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
              <h5>Budi</h5>
              <a href>Lihat Profile</a>
              <hr />
            </div>
            <div className="link-card-left-bahasa">
              <a href="/profile/pengalaman">
                <i className="fas fa-briefcase" />
                Pengalaman
              </a>
              <a href="/profile/pendidikan">
                <i className="fas fa-user-graduate" />
                Pendidikan
              </a>
              <a href="/profile/keahlian">
                <i className="fas fa-poll-h" />
                Keahlian
              </a>
              <a href="/profile/bahasa">
                <i className="fas fa-globe" />
                Bahasa
              </a>
              <a href="/profile/preferensipekerjaan">
                <i className="fas fa-clone" />
                Preferensi Pekerjaan
              </a>
              <a href="/profile/datadiri">
                <i className="fas fa-address-card" />
                Data Diri
              </a>
              <a href="/profile/unggahresume">
                <i className="fas fa-cloud-upload-alt" />
                Unggah Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
