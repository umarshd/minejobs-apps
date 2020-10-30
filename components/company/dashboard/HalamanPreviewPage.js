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
        <div className="bg-custom-8">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src="/ot-bg-none.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 foto-company-bingkai">
        <div className="foto-company pl-3">
          <img
            src="/ot-bg-none.png"
            className="rounded-circle bg-custom-9 mb-2"
            height="128"
            width="128"
          />
        </div>
        <h5 className="pl-3 mt-5 pt-3">
          <a href="#" className="bg-none font-weight-bold">
            Orangtua Group
          </a>
        </h5>
      </div>
      <div className="col-md-9">
        <div className="alamat-company pl-3 pt-0">
          <h5 className="font-weight-bold">Alamat Kantor</h5>
          <p className="text-secondary">
            Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet, Menteng
            Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South Jakarta,
            Daerah Khusus Ibukota Jakarta, Indonesia
          </p>
          <div className="row">
            <div className="col-md-6 industri p-3">
              <h5 className="font-weight-bold">Industri</h5>
              <p className="text-secondary">Teknologi Informasi</p>
            </div>
            <div className="col-md-6 website p-3">
              <h5 className="font-weight-bold">Website</h5>
              <p className="text-secondary">Orangtuagroup.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 pl-3 pr-3">
        <a href="#" className="btn bg-custom-10 btn-block">
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
              <h5 className="font-weight-bold">Deskripsi Pekerjaan</h5>
              <p className="text-secondary">
                Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960, South
                Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="col-md-12">
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
          <div className="col-md-12">
            <div className="card p-3">
              <h5 className="font-weight-bold">Deskripsi Pekerjaan</h5>
              <p className="text-secondary">Tunjangan Kesehatan</p>
              <p className="text-secondary">Tunjangan Pensiun</p>
              <p className="text-secondary">Uang Transport</p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="card p-3">
              <h5 className="font-weight-bold">Tentang Orangtua Group</h5>
              <p className="text-secondary">
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
