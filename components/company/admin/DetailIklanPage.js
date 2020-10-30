import React from "react";

export default function DetailIklanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span className="pl-md-5">Detail Iklan</span>
          </div>
        </div>
        <div className="card-right-job-detail p-5">
          <div className="container mt-0">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <form>
                  <div className="form-group">
                    <label htmlFor="posisiPekerjaan">
                      <span className="font-weight-bold">Posisi Pekerjaan</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="posisiPekerjaan"
                      aria-describedby="PosisiPekerjaan"
                      placeholder="Fullstack Web Developer"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="posisiPekerjaan">
                      <span className="font-weight-bold">Rentang Gaji</span>
                    </label>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="gajiMinimal"
                          aria-describedby="PosisiPekerjaan"
                          placeholder="3.000.000"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="posisiPekerjaan"
                          aria-describedby="PosisiPekerjaan"
                          placeholder="15.000.000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="posisiPekerjaan">
                      <span className="font-weight-bold">Lokasi Kerja</span>
                    </label>
                    <div className="row">
                      <div className="col-md-6">
                        <select className="custom-select" id="provinsi">
                          <option selected>DKI Jakarta</option>
                          <option value="Jawa Barat">Jawa Barat</option>
                          <option value="Jawa Tengah">Jawa Tengah</option>
                          <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select className="custom-select" id="kota">
                          <option selected>Jakarta Pusat</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Semarang">Semarang</option>
                          <option value="Surabaya">Surabaya</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="posisiPekerjaan">
                      <span className="font-weight-bold">Bidang Pekerjaan</span>
                    </label>
                    <select className="custom-select" id="kota">
                      <option selected>Teknologi Informasi</option>
                      <option value="Development">Development</option>
                      <option value="Editing">Editing</option>
                      <option value="Design">Design</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="levelPekerjaan">
                      <span className="font-weight-bold">Level Pekerjaan</span>
                    </label>
                    <select className="custom-select" id="levelPekerjaan">
                      <option selected>Senior</option>
                      <option value="Pemula">Pemula</option>
                      <option value="Menengah">Menengah</option>
                      <option value="Tingkat Lanjut">Tingkat Lanjut</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="deskripsiPekerjaan">
                      <span className="font-weight-bold">
                        Deskripsi Pekerjaan
                      </span>
                    </label>
                    <textarea
                      className="form-control"
                      id="deskripsiPekerjaan"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tingkatPendidikan">
                      <span className="font-weight-bold">
                        Tingkat Pendidikan
                      </span>
                    </label>
                    <select className="custom-select" id="tingkatPendidikan">
                      <option selected>S1</option>
                      <option value="SMA/MA">SMA / MA</option>
                      <option value="Diploma D3">Diploma D3</option>
                      <option value="Sarjana S1">Sarjana S1</option>
                      <option value="Magister S2">Magister S2</option>
                      <option value="Doktor S3">Doktor S3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="posisiPekerjaan">
                      <span className="font-weight-bold">Pengalaman Kerja</span>
                    </label>
                    <select className="custom-select" id="kota">
                      <option selected>2 Tahun</option>
                      <option value="1 Tahun">1 Tahun</option>
                      <option value="2 Tahun">2 Tahun</option>
                      <option value="3 Tahun">3 Tahun</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="persyaratanLainnya">
                      <span className="font-weight-bold">
                        Persyaratan Lainnya
                      </span>
                    </label>
                    <textarea
                      className="form-control"
                      id="persyaratanLainnya"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="benefitPerusahaan">
                      <span className="font-weight-bold">
                        Benefit Perusahaan
                      </span>
                    </label>
                    <textarea
                      className="form-control"
                      id="benefitPerusahaan"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-5">
                      <button
                        type="submit"
                        className="btn bg-custom-1 mt-2 btn-block"
                      >
                        Hentikan Penayangan
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-5">
                      <button
                        type="submit"
                        className="btn btn-secondary mt-2 btn-block"
                      >
                        Edit Iklan
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
