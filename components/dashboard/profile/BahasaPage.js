import React from "react";

export default function BahasaPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-bahasa">
          <div className="container">
            <h5>
              <i className="fas fa-globe" />
              Bahasa
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="bahasa">Bahasa</label>
                        <select
                          className="custom-select"
                          id="pendidikanTerakhir"
                        >
                          <option selected>Select item...</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="kemampuanVerbal">
                          Kemampuan Verbal
                        </label>
                        <select className="custom-select" id="kemampuanVerbal">
                          <option selected>Select item...</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="kemampuanTulisan">
                          Kemampuan Tulisan
                        </label>
                        <select className="custom-select" id="kemampuanTulisan">
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
