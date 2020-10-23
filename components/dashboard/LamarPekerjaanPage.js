import React from "react";

export default function LamarPekerjaanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-cari-lowongan">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      placeholder="Cari Pekerjaan berdasarkan lokasi, jabatan, keahlian"
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className=" btn btn-custom"
                        id="basic-addon2"
                      >
                        Cari
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 mt-1">
                <p>Filter :</p>
              </div>
              <div className="col-md-2 ">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lokasi<i className="mr-2"> </i>
                  </button>
                  <div className="dropdown-menu p-2">
                    <div className="row">
                      <div className="col-md-12">
                        <input type="checkbox" className="mr-2" value="All" />
                        All
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="DKI Jakarta"
                        />
                        DKI Jakarta
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Jawa Barat"
                        />
                        Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Keahlian<i className="mr-2"> </i>
                  </button>
                  <div className="dropdown-menu p-2">
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Video Editing"
                        />
                        Video Editing
                      </div>
                      <div className="col-md-12">
                        <input type="checkbox" className="mr-2" value="HTML" />
                        HTML
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Adobe Illustrator"
                        />
                        Adobe Illustrator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Jabatan<i className="mr-2"> </i>
                  </button>
                  <div className="dropdown-menu p-2">
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Manager"
                        />
                        Manager
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Senior Software Engineer"
                        />
                        Senior Software Engineer
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Full Stack Web Developer"
                        />
                        Full Stack Web Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <p>Menampilkan Hasil 1 - 15 dari 153 hasil</p>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="row">
                    <div className="col-md-3">
                      <img className="img-fluid" src="/bg-home.jpg" />
                    </div>
                    <div className="col-md-6 mb-auto mt-auto">
                      <div className="job-description">
                        <div className="job-title">
                          Full Stack Web Developer
                        </div>
                        <div className="corporate">Orangtua Group</div>
                        <div className="job-location">
                          Jawa Tengah, Semarang
                        </div>
                        <div className="salary">
                          Rp.4.000.000 - Rp.8.000.000 / Bulan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3 mb-5">
                <div className="row">
                  <div className="offset-md-3 col-md-5">
                    <div className="my-name">Budi Gunawan</div>
                    <div className="jurusan">Sarjana S1 Teknik Informatika</div>
                    <div className="school">Universitas Dian Nuswantoro</div>
                  </div>
                  <div className="col-md-3">
                    <a href="#" className="btn btn-secondary btn-block">
                      Lihat Profile
                    </a>
                    <a href="#" className="btn btn-secondary btn-block">
                      Edit Profile
                    </a>
                    <a href="#" className="btn btn-primary btn-block">
                      Kirim Lamaran
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-4">
                <nav aria-label="Page navigation example ">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
