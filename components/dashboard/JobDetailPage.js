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
          <div className="jumbotron-job-detail ">
            <div className="row">
              <div className="col-md-12">
                <img src="/ot-bg-none.png" className="bg-company" />
                <img
                  className="rounded-circle foto-company"
                  height="96"
                  width="96"
                  src="/bg-home.jpg"
                />
                <div className="corporate font-weight-bold mt-2">
                  <a href="/companydetails">
                    <h5 className="font-weight-bold">Orangtua Group</h5>
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="address-corporate">
                  <h5 className="font-weight-bold">Alamat Kantor</h5>
                  <p className="text-secondary">
                    Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                    Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960,
                    South Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
                  </p>
                  <div className="row">
                    <div className="col-md-6 industri">
                      <h5 className="font-weight-bold">Industri</h5>
                      <p className="text-secondary">Teknologi Informasi</p>
                    </div>
                    <div className="col-md-6 website">
                      <h5 className="font-weight-bold">Website</h5>
                      <p className="text-secondary">Orangtuagroup.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <a href="#" className="btn bg-custom-10 btn-block">
                  Simpan Lowongan
                </a>
                <a href="/lamarpekerjaan" className="btn btn-primary btn-block">
                  Kirim Lamaran
                </a>
              </div>
            </div>
          </div>
          <div className="row mb-4 ">
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5 className="font-weight-bold">Deskripsi Pekerjaan</h5>
                <p className="text-secondary">
                  Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                  Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South
                  Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
                </p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5 className="font-weight-bold">Kualifikasi Minimal</h5>
                <p className="text-secondary">
                  * 3 - 5 tahun pengalaman kerja sebagai project manager
                </p>
                <p className="text-secondary">
                  * Berpengalaman menggunakan framework Scrum
                </p>
                <p className="text-secondary">
                  * Memiliki jiwa kepemimpinan dan komunikasi yang baik
                </p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5 className="font-weight-bold">Benefit</h5>
                <p className="text-secondary">Tunjangan Kesehatan</p>
                <p className="text-secondary">Tunjangan Pensiun</p>
                <p className="text-secondary">Uang Transport</p>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5 className="font-weight-bold">Tentang Orangtua Group</h5>
                <p className="text-secondary">
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
