import React from "react";

export default function PengalamanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" className="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div className="card-right-pengalaman">
          <div className="container">
            <h5>
              <i className="fas fa-briefcase" />
              Pengalaman
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="form-group">
                    <label htmlFor="posisi">Posisi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="posisi"
                      aria-describedby="posisi"
                      placeholder="Posisi"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="namePerusahaan">Nama Perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      id="namePerusahaan"
                      aria-describedby="namePerusahaan"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="waktuMulai">Waktu Mulai</label>
                        <select className="custom-select" id="bulanMulai">
                          <option selected>Bulan Mulai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <select className="custom-select mt-3" id="tahunMulai">
                          <option selected>Tahun Mulai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-5 offset-lg-2">
                      <div className="form-group">
                        <label htmlFor="waktuSelesai">Waktu Selesai</label>
                        <select className="custom-select" id="bulanSelesai">
                          <option selected>Bulan Selesai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <select
                          className="custom-select mt-3"
                          id="tahunSelesai"
                        >
                          <option selected>Tahun Selesai</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="jabatan">Jabatan</label>
                    <select className="custom-select" id="jabatan">
                      <option selected>Jabatan</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gajiBulanan">Gaji Bulanan</label>
                    <input
                      type="number"
                      className="form-control"
                      id="gajiBulanan"
                      placeholder="Gaji Bulanan"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deskripsiPekerjaan">
                      Deskripsi Pekerjaan
                    </label>
                    <textarea
                      className="form-control"
                      id="deskripsiPekerjaan"
                      rows={3}
                      defaultValue={""}
                    />
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
