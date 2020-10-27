import React from "react";

export default function HeaderCompanyPage() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Mine<span>jobs</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a
                  className="nav-item nav-link btn btn-warning text-white"
                  href="#"
                >
                  Dashboard Perusahaan
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Modal login*/}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-5">
              <div className="modal-body text-center">
                <h4>Masuk</h4>
                <p>Temukan Pekerjaan Impian</p>
                <a href="#" className="bg-form-input p-3">
                  <img src="/assets/icon/google.svg" height={32} alt="" /> Masuk
                  Dengan Google
                </a>
                <p className="mt-3">
                  Atau
                  <br />
                  Masuk Dengan Email
                </p>
                <form className="loginForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          aria-describedby="password"
                          placeholder="Kata Sandi"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4 mb-4">
                    Masuk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron-company jumbotron-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card p-5">
                  <h3 className="text-center mb-4">
                    Daftar dan Dapatkan <br />
                    Satu Iklan Gratis
                  </h3>
                  <form method="post">
                    <div className="form-group pl-5 pr-5">
                      <label htmlFor="nama">Nama</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nama"
                        aria-describedby="nama"
                        placeholder="Nama"
                      />
                    </div>
                    <div className="form-group pl-5 pr-5">
                      <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaPerusahaan"
                        placeholder="Nama Perusahaan"
                      />
                    </div>
                    <div className="form-group pl-5 pr-5">
                      <label htmlFor="nomerHandphone">Nomer Handphone</label>
                      <input
                        type="number"
                        className="form-control"
                        id="nomerHandphone"
                        placeholder="Nomer Handphone"
                      />
                    </div>
                    <div className="form-group pl-5 pr-5">
                      <label htmlFor="emailCompany">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailCompany"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group pl-5 pr-5">
                      <label htmlFor="kataSandi">Kata Sandi</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kataSandi"
                        placeholder="Kata Sandi"
                      />
                    </div>
                    <div className="form-group pl-5 pr-5">
                      <span>
                        Dengan melanjutkan, Anda telah menyetujui Kebijakan
                        Privasi dan Syarat & Ketentuan Minejobs
                      </span>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">
                          Daftar Sekarang
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
