import React from "react";

export default function HalamanVerifikasiPage() {
  return (
    <>
      <div className="col-md-12">
        <div className="bg-custom-secondary p-3">
          <div className="container-custom">
            <p>
              Untuk keperluan registrasi awal, kami membutuhkan beberapa data
              dan dokumen. Silahkan mengisi formulir di bawah ini, dan bagian
              penjualan kami akan segera menghubungi Anda.
            </p>
          </div>
          <hr />
        </div>
        <form>
          <div className="bg-custom-secondary">
            <div className="container-custom">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="namaPerusahaan ">
                          <span className="font-weight-bold">
                            Nama Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPerusahaan"
                          aria-describedby="NamaPerusahaan"
                          placeholder="Nama Perusahaan"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                      <div className="form-group">
                        <label htmlFor="namaPic">
                          <span className="font-weight-bold">Nama PIC</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPic"
                          aria-describedby="NamaPic"
                          placeholder="Nama PIC"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
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
                          placeholder="Alamat Perusahaan"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                      <div className="form-group">
                        <label htmlFor="noTeleponPic">
                          <span className="font-weight-bold">
                            No Telepon PIC
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="noTeleponPic"
                          aria-describedby="NoTeleponPic"
                          placeholder="No Telepon PIC"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="npwpPerusahaan">
                          <span className="font-weight-bold">
                            NPWP Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="npwpPerusahaan"
                          aria-describedby="NpwpPerusahaan"
                          placeholder="Nomor Pokok Wajib Pajak"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                      <div className="form-group">
                        <label htmlFor="websitePerushaan">
                          <span className="font-weight-bold">
                            Website Perusahaan
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="websitePerushaan"
                          aria-describedby="WebsitePerushaan"
                          placeholder="Website Perusahaan"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="nomorTeleponKantor">
                              <span className="font-weight-bold">
                                Nomor Telepon Kantor
                              </span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nomorTeleponKantor"
                              aria-describedby="NomorTeleponKantor"
                              placeholder="Nomor Telepon Kantor"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="jenisIndustri">
                              <span className="font-weight-bold">
                                Jenis Industri
                              </span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="jenisIndustri"
                              aria-describedby="JenisIndustri"
                              placeholder="Jenis Industri"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                      <div class="form-group">
                        <label for="lokasiWawancara">
                          <span className="font-weight-bold">
                            Lokasi Wawancara
                          </span>
                        </label>
                        <textarea
                          class="form-control"
                          id="lokasiWawancara"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="text-center">
                        Jika tidak tersedia NPWP perusahaan, silahkan unggah KTP
                        PIC
                      </p>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="unggahNpwpPerusahaan">
                          <span className="font-weight-bold">
                            Unggah NPWP Perusahaan
                          </span>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="unggahNpwpPerusahaan"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                      <div className="form-group">
                        <label htmlFor="unggahKtpPic">
                          <span className="font-weight-bold">
                            Unggah KTP PIC
                          </span>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="unggahKtpPic"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mb-5 mt-3">
            <div className="col-md-12">
              <button type="submit" class="btn btn-primary">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
