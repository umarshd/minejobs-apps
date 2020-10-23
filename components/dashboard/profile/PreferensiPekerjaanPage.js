import React from "react";

export default function PreferensiPekerjaanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" className="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div className="card-right-preferensi">
          <div className="container">
            <h5>
              <i className="fas fa-clone" />
              Preferensi Pekerjaan
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="form-group">
                    <label htmlFor="posisi">Gaji yang diharapkan</label>
                    <input
                      type="number"
                      className="form-control"
                      id="gaji"
                      aria-describedby="gaji"
                      placeholder
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lokasi">Lokasi yang diharapkan</label>
                    <select className="custom-select" id="lokasi">
                      <option selected>Pilih Provinsi</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
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
