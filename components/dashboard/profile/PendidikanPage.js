import React from "react";

export default function PendidikanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" className="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div className="card-right-pendidikan">
          <div className="container">
            <h5>
              <i className="fas fa-user-graduate" />
              Pendidikan
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="form-group">
                    <label htmlFor="pendidikanTerakhir">
                      Pendidikan Terakhir
                    </label>
                    <select className="custom-select" id="pendidikanTerakhir">
                      <option selected>Pilih Tingkat Pendidikan</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="namaTempatBelajar">
                      Nama Instansi / Sekolah / Universitas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="namaTempatBelajar"
                      placeholder="Nama Instansi / Sekolah / Universitas"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="waktuMulai">Waktu Mulai</label>
                        <select className="custom-select" id="tahunMulai">
                          <option selected>Tahun Mulai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="waktuSelesai">
                          Waktu Selesai
                          <span>(Atau perkiraan selesai)</span>
                        </label>
                        <select className="custom-select" id="tahunSelesai">
                          <option selected>Tahun Selesai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
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
