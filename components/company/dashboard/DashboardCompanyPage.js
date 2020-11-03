import React from "react";

export default function DashboardCompanyPage() {
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
        <div className="container-custom">
          <h4>Selamat Datang, Budi</h4>
        </div>
        <div className=" bg-custom-secondary mb-3 pt-4 pb-4 col-custom  ">
          <div className="container-custom">
            <div className="row text-center">
              <div className="col-md-3 ">
                <div className="card bg-custom-secondary p-3">
                  <img src="/assets/icon/hangouts-meet.svg" height="128px" />
                  <h6 className="mt-3 ">Beli/Tambah Kredit</h6>
                </div>
              </div>
              <div className="col-md-3">
                <a href="/company/dashboard/iklanlowonganterpasang">
                  <div className="card bg-custom-secondary p-3">
                    <img src="/assets/icon/hangouts-meet.svg" height="128" />
                    <h6 className="mt-3">Pasang Iklan</h6>
                  </div>
                </a>
              </div>
              <div className="col-md-3 ">
                <a href="/company/dashboard/iklanlowonganterpasang">
                  <div className="card bg-custom-secondary p-3 ">
                    <img src="/assets/icon/hangouts-meet.svg" height="128" />
                    <h6 className="mt-3">Cari Kandidat</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row dashboard-company mb-5">
          <div className="col-md-12">
            <div className="bg-custom-secondary pt-3 pb-5">
              <div className="container-custom">
                <div className="row">
                  <div className="col-md-3">
                    <h6>
                      <a href="#">Wawancara Terdekat (5)</a>
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <h6>
                      <a href="#">Permintaan Atur Ulang (10)</a>
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <h6>
                      <a href="#">Menunggu Konfirmasi(2)</a>
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <h6>
                      <a href="#">Lihat Semua Jadwal (10)</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="container">
                <hr className="pl-1 pr-1" />
              </div>
              <div className="container-custom">
                <div className="row">
                  <div className="col-md-12">
                    <p>Menampilkan : Wawancara Terdekat</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card pt-3 pb-3">
                      <div className="container-custom">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="nama-kandidat font-weight-bold">
                              Agus Hartanto
                            </div>
                            <div className="posisi-kandidat">
                              Posisi yang Dilamar : Fullstack Web Developer
                            </div>
                            <div className="tanggal-wawancara">
                              Tanggal : 12/03/2019
                            </div>
                            <div className="waktu-wawancara">
                              Waktu : 10.00 WIB
                            </div>
                            <div className="metode-wawancara">
                              Metode Wawancara : Video Conference
                            </div>
                          </div>
                          <div className="col-md-3">
                            <a className="btn btn-success btn-block text-white">
                              Link Video Conference
                            </a>
                            <a className="btn btn-primary btn-block text-white">
                              Lihat Profile
                            </a>
                            <a className="btn bg-custom-4 btn-block text-white">
                              Pilih Kandidat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card pt-3 pb-3">
                      <div className="container-custom">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="nama-kandidat font-weight-bold">
                              Agus Hartanto
                            </div>
                            <div className="posisi-kandidat">
                              Posisi yang Dilamar : Fullstack Web Developer
                            </div>
                            <div className="tanggal-wawancara">
                              Tanggal : 12/03/2019
                            </div>
                            <div className="waktu-wawancara">
                              Waktu : 10.00 WIB
                            </div>
                            <div className="metode-wawancara">
                              Metode Wawancara : Video Conference
                            </div>
                          </div>
                          <div className="col-md-3">
                            <a className="btn btn-success btn-block text-white">
                              Link Video Conference
                            </a>
                            <a className="btn btn-primary btn-block text-white">
                              Lihat Profile
                            </a>
                            <a className="btn bg-custom-4 btn-block text-white">
                              Pilih Kandidat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card pt-3 pb-3">
                      <div className="container-custom">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="nama-kandidat font-weight-bold">
                              Agus Hartanto
                            </div>
                            <div className="posisi-kandidat">
                              Posisi yang Dilamar : Fullstack Web Developer
                            </div>
                            <div className="tanggal-wawancara">
                              Tanggal : 12/03/2019
                            </div>
                            <div className="waktu-wawancara">
                              Waktu : 10.00 WIB
                            </div>
                            <div className="metode-wawancara">
                              Metode Wawancara : Video Conference
                            </div>
                          </div>
                          <div className="col-md-3">
                            <a className="btn btn-success btn-block text-white">
                              Link Video Conference
                            </a>
                            <a className="btn btn-primary btn-block text-white">
                              Lihat Profile
                            </a>
                            <a className="btn bg-custom-4 btn-block text-white">
                              Pilih Kandidat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card pt-3 pb-3">
                      <div className="container-custom">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="nama-kandidat font-weight-bold">
                              Agus Hartanto
                            </div>
                            <div className="posisi-kandidat">
                              Posisi yang Dilamar : Fullstack Web Developer
                            </div>
                            <div className="tanggal-wawancara">
                              Tanggal : 12/03/2019
                            </div>
                            <div className="waktu-wawancara">
                              Waktu : 10.00 WIB
                            </div>
                            <div className="metode-wawancara">
                              Metode Wawancara : Video Conference
                            </div>
                          </div>
                          <div className="col-md-3">
                            <a className="btn btn-success btn-block text-white">
                              Link Video Conference
                            </a>
                            <a className="btn btn-primary btn-block text-white">
                              Lihat Profile
                            </a>
                            <a className="btn bg-custom-4 btn-block text-white">
                              Pilih Kandidat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
