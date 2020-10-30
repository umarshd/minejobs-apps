import React from "react";

export default function DetailPerusahaanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span className="pl-md-5">Detail Perusahaan</span>
          </div>
        </div>
        <div className="card-right-job-detail p-5">
          <div className="container mt-0">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="namaPerusahaan">
                          <span className="font-weight-bold">
                            Nama Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPerusahaan"
                          aria-describedby="NamaPerusahaan"
                          placeholder="PT Panpanoe"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="namaPic">
                          <span className="font-weight-bold">Nama PIC</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPic"
                          aria-describedby="NamaPic"
                          placeholder="Hendrik Agus"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="alamatPerusahaan">
                          <span className="font-weight-bold">
                            Alamat Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="alamatPerusahaan"
                          aria-describedby="AlamatPerusahaan"
                          placeholder="Kuningan , Jakarta Barat"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="jabatanPic">
                          <span className="font-weight-bold">Jabatan PIC</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="jabatanPic"
                          aria-describedby="JabatanPic"
                          placeholder="HRD"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="npwpPerusahaan">
                          <span className="font-weight-bold">
                            NPWP Perusahaan
                          </span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="npwpPerusahaan"
                          aria-describedby="NpwpPerusahaan"
                          placeholder="33221177991"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="noTeleponPic">
                          <span className="font-weight-bold">
                            No Telepon PIC
                          </span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="noTeleponPic"
                          aria-describedby="NoTeleponPic"
                          placeholder="089993332223"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nomerTeleponKantor">
                          <span className="font-weight-bold">
                            Nomor Telepon Kantor
                          </span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="nomerTeleponKantor"
                          aria-describedby="NomerTeleponKantor"
                          placeholder="021 77677677"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="jenisIndustri">
                          <span className="font-weight-bold">
                            Jenis Industri
                          </span>
                        </label>
                        <select className="custom-select" id="provinsi">
                          <option selected>Jenis Industri</option>
                          <option value="Garment">Garment</option>
                          <option value="Teknologi">Teknologi</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="jenisIndustri">
                          <span className="font-weight-bold">
                            Jenis Industri
                          </span>
                        </label>
                        <select className="custom-select" id="provinsi">
                          <option selected>Teknologi Informasi</option>
                          <option value="Garment">Garment</option>
                          <option value="Teknologi">Teknologi</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="websitePerusahaan">
                          <span className="font-weight-bold">
                            Website Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="websitePerusahaan"
                          aria-describedby="JabatanPic"
                          placeholder="Projects.co.id"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <span className="font-weight-bold">
                          <a href="#" className="bg-none">
                            Lihat NPWP Perusahaan
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <span className="font-weight-bold">
                          <a href="#" className="bg-none">
                            Lihat KTP PIC
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary mt-5 btn-block"
                      >
                        Verifikasi
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
