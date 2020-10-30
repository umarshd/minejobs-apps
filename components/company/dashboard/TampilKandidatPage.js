import React from "react";

export default function TampilKandidatPage() {
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
        <div className="container-custom mb-3">
          <h4>Iklan Lowongan : Fullstack Web Developer</h4>
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="btn bg-custom-5 btn-block text-white">
                Edit Iklan
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="btn bg-custom-6 btn-block">
                Hentikan Iklan
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="bg-custom-secondary pt-3 pb-3 mb-3">
          <div className="container-custom">
            <p className="font-weight-bold">Filter :</p>
            <div className="row">
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Belum Diproses (10)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Tidak Sesuai (3)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Kandidat Terpilih (5)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  List Wawancara (4)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Wawancara Terdekat (5)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Permintaan Atur Ulang (10)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Menunggu Konfirmasi(2)
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="bg-none">
                  Lihat Semua Jadwal (10)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="bg-custom-secondary mt-5 pt-4 pb-4 mb-4">
          <div className="container-custom">
            <div className="row mb-3">
              <div className="col-md-8 mr-4">Menampilkan : List Wawancara</div>
              <div className="col-md-3 ml-5">
                <a href="#" className="btn bg-custom-11">
                  Tampilkan Semua Kandidat
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card p-4">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="nama-kandidat font-weight-bold">
                        Agus Hartanto
                      </div>
                      <div className="jurusan-kandidat">
                        Pendidikan Terakhir: Sarjana (S1), Teknik Informatika
                      </div>
                      <div className="gaji-kandidat">
                        Gaji yang di inginkan : Rp.3.000.000
                      </div>
                    </div>
                    <div className="col-md-3">
                      <a href="#" className="btn btn-primary btn-block">
                        Lihat Profile
                      </a>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        disabled
                      >
                        Atur Wawancara
                      </button>
                      <a
                        href="#"
                        className="btn bg-custom-4 btn-block text-white"
                      >
                        Pilih Kandidat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card p-4">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="nama-kandidat font-weight-bold">
                        Agus Hartanto
                      </div>
                      <div className="jurusan-kandidat">
                        Pendidikan Terakhir: Sarjana (S1), Teknik Informatika
                      </div>
                      <div className="gaji-kandidat">
                        Gaji yang di inginkan : Rp.3.000.000
                      </div>
                    </div>
                    <div className="col-md-3">
                      <a href="#" className="btn btn-primary btn-block">
                        Lihat Profile
                      </a>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        Atur Wawancara
                      </button>
                      <a
                        href="#"
                        className="btn bg-custom-4 btn-block text-white"
                      >
                        Pilih Kandidat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card p-4">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="nama-kandidat font-weight-bold">
                        Agus Hartanto
                      </div>
                      <div className="jurusan-kandidat">
                        Pendidikan Terakhir: Sarjana (S1), Teknik Informatika
                      </div>
                      <div className="gaji-kandidat">
                        Gaji yang di inginkan : Rp.3.000.000
                      </div>
                    </div>
                    <div className="col-md-3">
                      <a href="#" className="btn btn-primary btn-block">
                        Lihat Profile
                      </a>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        Atur Wawancara
                      </button>
                      <a
                        href="#"
                        className="btn bg-custom-4 btn-block text-white"
                      >
                        Pilih Kandidat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card p-4">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="nama-kandidat font-weight-bold">
                        Agus Hartanto
                      </div>
                      <div className="jurusan-kandidat">
                        Pendidikan Terakhir: Sarjana (S1), Teknik Informatika
                      </div>
                      <div className="gaji-kandidat">
                        Gaji yang di inginkan : Rp.3.000.000
                      </div>
                    </div>
                    <div className="col-md-3">
                      <a href="#" className="btn btn-primary btn-block">
                        Lihat Profile
                      </a>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                      >
                        Atur Wawancara
                      </button>
                      <a
                        href="#"
                        className="btn bg-custom-4 btn-block text-white"
                      >
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
      {/* Large modal */}
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-5">
            <div className="container-custom">
              <h5 className="text-center mb-3">Atur Jadwal Wawancara</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="pilihTanggal">Pilih Tanggal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pilihTanggal"
                    aria-describedby="PilihTanggal"
                    placeholder="Pilih Tanggal"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pilihWaktuMulai">Pilih Waktu Mulai</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pilihWaktuMulai"
                    aria-describedby="PilihWaktuMulai"
                    placeholder="Pilih Waktu Mulai"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pilihWaktuSelesai">Pilih Waktu Selesai</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pilihWaktuSelesai"
                    aria-describedby="PilihWaktuSelesai"
                    placeholder="Pilih Waktu Selesai"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="metodeWawancara">Pilih Waktu Selesai</label>
                  <select className="custom-select" id="metodeWawancara">
                    <option selected>Metode Wawancara</option>
                    <option value={"Langsung"}>Langsung</option>
                    <option value={"Video Conference"}>Video Conference</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="linkVideoConference">
                    Link Video Conference
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="linkVideoConference"
                    aria-describedby="LinkVideoConference"
                    placeholder="Link Video Conference"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lokasiWawancara">Lokasi Wawancara</label>
                  <textarea
                    className="form-control"
                    id="lokasiWawancara"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div class="form-group">
                  <label for="pesan">Pesan</label>
                  <textarea class="form-control" id="pesan" rows="4"></textarea>
                </div>
                <div className="row text-center">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Kirim Undangan
                    </button>
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
