import React from "react";

export default function CompanyPage() {
  return (
    <>
      <section className="company-promo">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center mb-5">
              <div className="col-md-8 text-center">
                <h4>
                  Minejobs Menawarkan Anda lebih <br />
                  dari sekedar iklan lowongan
                </h4>
                <p className="mb-3">
                  Kami menawarkan berbagai produk dan solusi <br />
                  yang membantu Anda menemukan kandidat terbaik.
                </p>
              </div>
            </div>
            <div className="row justify-content-center content-company-promo ">
              <div className="col-md-6">
                <img src="/bg-home.jpg" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h4>
                  Iklan Lowongan anda akan <br /> menarik jutaan kandidat
                </h4>
                <p>
                  Minejobs.id adalah pilihan utama jutaan kandidat untuk mencari
                  pekerjaan. Dengan pasang iklan lowongan di JobStreet, Anda
                  memiliki kesempatan 8x lebih besar untuk mendapatkan kandidat
                  yang tepat.
                </p>
              </div>
              <div className="col-md-6 mt-md-5">
                <h4>
                  Proses seleksi pelamar yang <br /> mudah dan efisien
                </h4>
                <p>
                  Minejobs adalah pilihan utama jutaan kandidat untuk mencari
                  pekerjaan. Dengan pasang iklan lowongan di JobStreet, Anda
                  memiliki kesempatan 8x lebih besar untuk mendapatkan kandidat
                  yang tepat.
                </p>
              </div>
              <div className="col-md-6 mt-md-5">
                <img src="/bg-home.jpg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="temukan-orang mt-5">
        <h4 className="text-center mb-4 mt-5">
          Kini Menemukan Orang yang Tepat <br /> Makin Mudah
        </h4>
        <div className="row mb-5 text-center">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top pt-5 pb-5 bg-custom-secondary"
                height="128"
                src="/assets/icon/hangouts-meet.svg"
                alt="Card image cap"
              />
              <div className="card-body p-3 pl-5 pr-5 pb-5">
                <h6>Wawancara Langsung Melalui Video Conference</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top pt-5 pb-5 bg-custom-secondary"
                height="128"
                src="/assets/icon/hangouts-meet.svg"
                alt="Card image cap"
              />
              <div className="card-body p-3 pl-5 pr-5 pb-5">
                <h6>Temukan Kandidat yang Tepat Sesuai Kebutuhan</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top pt-5 pb-5 bg-custom-secondary"
                height="128"
                src="/assets/icon/hangouts-meet.svg"
                alt="Card image cap"
              />
              <div className="card-body p-3 pl-5 pr-5 pb-5">
                <h6>Mudah , Cepat, dan Praktis</h6>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5 mb-5">
            <button className="btn btn-primary pl-4 pr-4" type="submit">
              DAFTAR SEKARANG
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
