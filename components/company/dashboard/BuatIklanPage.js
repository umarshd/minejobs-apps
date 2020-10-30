import React from "react";

export default function BuatIklanPage() {
  return (
    <>
      <div className="col-md-12">
        <div className="alert alert-custom-company" role="alert">
          <div className="container-custom">
            <span>Status Akun : Aktif</span>
            <span className="pl-5">Sisa Kredit : 5</span>
            <span className="pl-5">Iklan Tayang : 3</span>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="bg-custom-secondary p-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="posisiPekerjaan">
                        <span className="font-weight-bold">
                          Posisi Pekerjaan
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="posisiPekerjaan"
                        aria-describedby="PosisiPekerjaan"
                        placeholder="Posisi Pekerjaan"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="rentangGaji">
                        <span className="font-weight-bold">Rentang Gaji</span>
                      </label>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            id="gajiMinimal"
                            aria-describedby="GajiMinimal"
                            placeholder="Gaji Minimal"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            id="gajiMaksimal"
                            aria-describedby="GajiMaksimal"
                            placeholder="Gaji Maksimal"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="lokasiKerja">
                        <span className="font-weight-bold">Lokasi Kerja</span>
                      </label>
                      <div className="row">
                        <div className="col-md-6">
                          <select className="custom-select" id="lokasiKerja">
                            <option selected>Pilih Provinsi</option>
                            <option value={"DKI Jakarta"}>DKI Jakarta</option>
                            <option value={"Jawa Barat"}>Jawa Barat</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <select className="custom-select" id="lokasiKerja">
                            <option selected>Pilih Provinsi</option>
                            <option value={"Jakarta Pusat"}>
                              Jakarta Pusat
                            </option>
                            <option value={"Bandung"}>Bandung</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="bidangPekerjaan">
                        <span className="font-weight-bold">
                          Bidang Pekerjaan
                        </span>
                      </label>
                      <select className="custom-select" id="bidangPekerjaan">
                        <option selected>Bidang Pekerjaan</option>
                        <option value={"development"}>Development</option>
                        <option value={"editing"}>Editing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="levelPekerjaan">
                        <span className="font-weight-bold">
                          Level Pekerjaan
                        </span>
                      </label>
                      <select className="custom-select" id="levelPekerjaan">
                        <option selected>Level Pekerjaan</option>
                        <option value={"pemula"}>Pemula</option>
                        <option value={"menengah"}>Menengah</option>
                        <option value={"tingkat lanjut"}>Tingkat Lanjut</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
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
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="levelPekerjaan">
                        <span className="font-weight-bold">
                          Tingkat Pendidikan
                        </span>
                      </label>
                      <select className="custom-select" id="levelPekerjaan">
                        <option selected>Pilih Jenjang Pendidikan</option>
                        <option value={"SMA/MA"}>SMA / MA</option>
                        <option value={"Diploma D3"}>Diploma D3</option>
                        <option value={"Sarjana S1"}>Sarjana S1</option>
                        <option value={"Magister S2"}>Magister S2</option>
                        <option value={"Doktor S3"}>Doktor S3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="pengalamanKerja">
                        <span className="font-weight-bold">
                          Pengalaman Kerja
                        </span>
                      </label>
                      <select className="custom-select" id="levelPekerjaan">
                        <option selected>Pilih Pengalaman Kerja</option>
                        <option value={"SMA/MA"}>SMA / MA</option>
                        <option value={"Diploma D3"}>Diploma D3</option>
                        <option value={"Sarjana S1"}>Sarjana S1</option>
                        <option value={"Magister S2"}>Magister S2</option>
                        <option value={"Doktor S3"}>Doktor S3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
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
                  </div>
                  <div className="col-md-12">
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
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="unggahFotoHeader">
                        <span className="font-weight-bold">
                          Unggah Foto Header
                        </span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="unggahFotoHeader"
                      />
                    </div>
                  </div>
                </div>
                <div className="row text-center mt-3 justify-content-center">
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Tayangkan
                    </button>
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <div className="col-md-4">
                    <a href="#" className="btn btn-secondary btn-block">
                      Preview
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
