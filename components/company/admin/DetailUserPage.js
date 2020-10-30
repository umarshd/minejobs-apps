import React from "react";

export default function DetailUserPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span className="pl-md-5">Detail Pencari Kerja</span>
          </div>
        </div>
        <div className="card bg-custom-secondary p-3">
          <div className="row">
            <div className="col-md-2 mr-3">
              <img
                src="/bg-home.jpg"
                className="rounded-circle"
                height="128"
                width="128"
              />
            </div>
            <div className="col-md-8">
              <h5 className="font-weight-bold"> Budi Gunawan</h5>
              <div className="alamat-user">
                <i class="fas fa-map-marker-alt mr-3"></i>Jawa Tengah,Semarang
              </div>
              <div className="email-user">
                <i class="fas fa-envelope mr-3"></i>budigunawan@gmail.com
              </div>
              <div className="email-user">
                <i class="fas fa-id-card mr-3"></i>+62 8223400993
              </div>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <div className="row">
            <div className="col-md-8">
              <h5 className="font-weight-bold">Tentang Budi</h5>
              <p className="text-secondary">
                Ir. Budi Gunawan Sumadi adalah Menteri Perhubungan Republik
                Indonesia pada Kabinet Indonesia Maju setelah sebelumnya
                menjabat posisi yang sama pada Kabinet Kerja sejak 27 Juli 2016
                menggantikan Ignasius Jonan
              </p>
            </div>
            <div className="col-md-3 offset-md-1">
              <a href="#" className="btn bg-custom-1 btn-block">
                Batasi Akun
              </a>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <div className="row">
            <div className="col-md-6">
              <h5 className="font-weight-bold">Preferensi Pekerjaan</h5>
              <p className="text-secondary">Gaji : Rp.4.000.000 - 5.000.000</p>
              <p className="text-secondary">
                Lokasi Kerja : Jakarta Selatan, DKI Jakarta
              </p>
              <p className="text-secondary">
                Bidang Pekerjaan : Teknologi Informasi, Software Engineer
              </p>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <h5 className="font-weight-bold">Pengalaman Kerja</h5>
          <div className="row">
            <div className="col-md-4">Sep 2019 - Sekarang</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">
                Fullstack Web Dev (Intern) di Binar Academy
              </h6>
              <p className="text-secondary">
                Memperlajari javascript dan penggunaan react framework,
                Mempelajari penggunaan agile scrum, dalam pengembangan perangkat
                lunak
              </p>
              <h6 className="font-weight-bold">Gaji Saat Ini</h6>
              <p className="text-secondary">Rp.1.700.000 per bulan</p>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <h5 className="font-weight-bold">Pendidikan</h5>
          <div className="row">
            <div className="col-md-4 text-secondary">2016 - Sekarang</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">Universitas Dian Nuswantoro</h6>
              <p className="text-secondary">Sarjana Teknik Informatika</p>
            </div>
            <div className="col-md-4 text-secondary">2013 - 2016</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">SMA Negeri 6 Semarang</h6>
              <p className="text-secondary">Sekolah Menengah</p>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <h5 className="font-weight-bold">Keahlian</h5>
          <div className="row">
            <div className="col-md-4 text-secondary">Video Editing</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">Menengah</h6>
            </div>
            <div className="col-md-4 text-secondary">ReactJs</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">Profesional</h6>
            </div>
            <div className="col-md-4 text-secondary">HTML</div>
            <div className="col-md-8">
              <h6 className="font-weight-bold">Pemula</h6>
            </div>
          </div>
        </div>
        <div className="card p-3 mb-5">
          <div className="row">
            <div className="col-md-4">
              <h5 className="font-weight-bold">Curriculum Vitae (CV)</h5>
            </div>
            <div className="col-md-8">
              <a href="#" className="btn btn-primary">
                Lihat CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
