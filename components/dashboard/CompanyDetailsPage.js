import React from "react";

export default function CompanyDetailsPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-job-detail">
          <div className="jumbotron-job-detail ">
            <div className="row p-3">
              <div className="col-md-12">
                <img src="/ot-bg-none.png" className="bg-company" />
                <img
                  className="rounded-circle foto-company"
                  height="96"
                  width="96"
                  src="/bg-home.jpg"
                />
                <div className="corporate font-weight-bold mt-2">
                  <h5>Orangtua Group</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="address-corporate">
                  <h5>Alamat Kantor</h5>
                  <p>
                    Wisma Staco) Jalan Casablanca Kav. 18, Menteng Dalam, Tebet,
                    Menteng Dalam, RT.4/RW.12, Menteng Dalam, Tebet, 12960,
                    South Jakarta, Daerah Khusus Ibukota Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 ">
            <div className="col-md-12 ">
              <div className="card p-3">
                <h5>Tentang Orangtua Group</h5>
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      OT adalah perusahaan consumer goods yang memproduksi
                      berbagai macam produk kebutuhan sehari-hari. Berawal dari
                      minuman kesehatan tradisional dengan bahan dan proses
                      terstandar berkualitas tinggi, OT telah berkembang semakin
                      modern tanpa meninggalkan nilai-nilai positif dan luhur
                      yang dicetuskan oleh pendiri perusahaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="font-weight-bold ml-3 mb-4">
                Lowongan Orangtua Group
              </h5>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid" src="/bg-home.jpg" />
                  </div>
                  <div className="col-md-6 mb-auto mt-auto">
                    <div className="job-description">
                      <div className="job-title font-weight-bold">
                        Full Stack Web Developer
                      </div>
                      <div className="corporate">Orangtua Group</div>
                      <div className="job-location">Jawa Tengah, Semarang</div>
                      <div className="salary">
                        Rp.4.000.000 - Rp.8.000.000 / Bulan
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 mr-2 mt-auto mb-auto">
                    <a href="/jobdetail" className="btn btn-primary btn-block">
                      Detail
                    </a>
                    <a href="#" className="btn btn-secondary btn-block">
                      Simpan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid" src="/bg-home.jpg" />
                  </div>
                  <div className="col-md-6 mb-auto mt-auto">
                    <div className="job-description">
                      <div className="job-title font-weight-bold">
                        Full Stack Web Developer
                      </div>
                      <div className="corporate">Orangtua Group</div>
                      <div className="job-location">Jawa Tengah, Semarang</div>
                      <div className="salary">
                        Rp.4.000.000 - Rp.8.000.000 / Bulan
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 mr-2 mt-auto mb-auto">
                    <a href="/jobdetail" className="btn btn-primary btn-block">
                      Detail
                    </a>
                    <a href="#" className="btn btn-secondary btn-block">
                      Simpan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid" src="/bg-home.jpg" />
                  </div>
                  <div className="col-md-6 mb-auto mt-auto">
                    <div className="job-description">
                      <div className="job-title font-weight-bold">
                        Full Stack Web Developer
                      </div>
                      <div className="corporate">Orangtua Group</div>
                      <div className="job-location">Jawa Tengah, Semarang</div>
                      <div className="salary">
                        Rp.4.000.000 - Rp.8.000.000 / Bulan
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 mr-2 mt-auto mb-auto">
                    <a href="/jobdetail" className="btn btn-primary btn-block">
                      Detail
                    </a>
                    <a href="#" className="btn btn-secondary btn-block">
                      Simpan
                    </a>
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
