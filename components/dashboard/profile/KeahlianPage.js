import React from "react";

export default function KeahlianPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" className="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div className="card-right-keahlian">
          <div className="container">
            <h5>
              <i className="fas fa-poll-h" />
              Keahlian
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-10">
                <form>
                  <div className="row">
                    <div className="col-md-12 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="keahlian">Keahlian</label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaTempatBelajar"
                          placeholder="Input text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="tingkatan">Tingkatan</label>
                        <select className="custom-select" id="tingkatan">
                          <option selected>Select item...</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-1">
                      <a href="#">
                        <i className="fas fa-plus-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-primary mb-3 mt-3"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
