import React from "react";

export default function JobDetailPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-job-detail p-3">
          <div className="jumbotron--job-detail ">
            <div className="row">
              <div className="col-md-12">
                <img className="rounded-circle" height="64" width="64" />
                <div className="corporate">Orangtua Group</div>
              </div>
              <div className="col-md-9">
                <div className="address-corporate">
                  <h5>Alamat Kantor</h5>
                  <p>
                    Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                    Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960,
                    South Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
                  </p>
                  <div className="row">
                    <div className="col-md-6 industri">
                      <h5>Industri</h5>
                      <p>Teknologi Informasi</p>
                    </div>
                    <div className="col-md-6 website">
                      <h5>Website</h5>
                      <p>Orangtuagroup.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <a href="#" className="btn btn-secondary btn-block">
                  Simpan Lowongan
                </a>
                <a href="#" className="btn btn-primary btn-block">
                  Kirim Lamaran
                </a>
              </div>
            </div>
          </div>
          <div className="row mb-4 ">
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5>Deskripsi Pekerjaan</h5>
                <p>
                  Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                  Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South
                  Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
                </p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5>Kualifikasi Minimal</h5>
                <p>* 3 - 5 tahun pengalaman kerja sebagai project manager</p>
                <p>* Berpengalaman menggunakan framework Scrum</p>
                <p>* Memiliki jiwa kepemimpinan dan komunikasi yang baik</p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5>Benefit</h5>
                <p>Tunjangan Kesehatan</p>
                <p>Tunjangan Pensiun</p>
                <p>Uang Transport</p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5>Tentang Orangtua Group</h5>
                <p>
                  OT adalah perusahaan consumer goods yang memproduksi berbagai
                  macam produk kebutuhan sehari-hari. Berawal dari minuman
                  kesehatan tradisional dengan bahan dan proses terstandar
                  berkualitas tinggi, OT telah berkembang semakin modern tanpa
                  meninggalkan nilai-nilai positif dan luhur yang dicetuskan
                  oleh pendiri perusahaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
