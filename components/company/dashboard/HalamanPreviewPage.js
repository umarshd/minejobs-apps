import React from "react";

export default function HalamanPreviewPage() {
  return (
    <>
      <div className="col-md-12">
        <div className="alert alert-custom-company" role="alert">
          <div className="container-custom">
            <span>Status Akun : Aktif</span>
            <span className="pl-5">Sisa Credit : 5</span>
            <span className="pl-5">Iklan Tayang : 3</span>
          </div>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="bg-custom-secondary">hello</div>
      </div>
      <div className="col-md-12">
        <img className="rounded-circle" src="/ot-bg-none.png" />
        <h6>
          <a href="#">Orangtua Group</a>
        </h6>
      </div>
      <div className="col-md-9">
        <div className="alamat-company">
          <h6>Alamat Kantor</h6>
          <p>
            Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet, Menteng
            Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South Jakarta,
            Daerah Khusus Ibukota Jakarta, Indonesia
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
          Edit Iklan
        </a>
        <a href="#" className="btn btn-primary btn-block mt-md-3">
          Tayang Iklan
        </a>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3">
              <h5>Deskripsi Pekerjaan</h5>
              <p>
                Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South
                Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card p-3">
              <h5>Kualifikasi Minimal</h5>
              <p>* 3 - 5 tahun pengalaman kerja sebagai project manager</p>
              <p>* Berpengalaman menggunakan framework Scrum</p>
              <p>* Memiliki jiwa kepemimpinan dan komunikasi yang baik</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card p-3">
              <h5>Deskripsi Pekerjaan</h5>
              <p>Tunjangan Kesehatan</p>
              <p>Tunjangan Pensiun</p>
              <p>Uang Transport</p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="card p-3">
              <h5>Tentang Orangtua Group</h5>
              <p>
                OT adalah perusahaan consumer goods yang memproduksi berbagai
                macam produk kebutuhan sehari-hari. Berawal dari minuman
                kesehatan tradisional dengan bahan dan proses terstandar
                berkualitas tinggi, OT telah berkembang semakin modern tanpa
                meninggalkan nilai-nilai positif dan luhur yang dicetuskan oleh
                pendiri perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
