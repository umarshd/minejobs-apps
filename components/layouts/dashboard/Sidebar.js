import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className="col-md-5 col-lg-3">
        <div className="card-left-bahasa">
          <div className="container">
            <div className="link-card-left-bahasa">
              <a href="/carilowongan">
                <i className="fas fa-search" />
                Cari Lowongan
              </a>
              <a href="/editprofile">
                <i className="fas fa-user" />
                Edit Profile
              </a>
              <a href="/lamaranterkirim">
                <i className="fas fa-paper-plane" />
                Lamaran Terkirim
              </a>
              <a href="/undanganinterview">
                <i className="fas fa-info-circle" />
                Undangan Interview
              </a>
              <a href="/jadwalinterview">
                <i className="fas fa-calendar-day" />
                Jawdal Interview
              </a>
              <a href="/lamarantersimpan">
                <i className="fas fa-archive" />
                Lamaran Tersimpan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
