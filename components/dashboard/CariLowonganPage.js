import React, { Fragment } from "react";
import NumberFormat from "react-number-format";

export default function CariLowonganPage({ data, handleFilter, submitFilter }) {
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
                <form onSubmit={submitFilter}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="query"
                      onChange={handleFilter}
                      placeholder="Cari Pekerjaan berdasarkan lokasi, jabatan, keahlian"
                    />
                    <div className="input-group-append">
                      <button className=" btn btn-custom" id="basic-addon2">
                        Cari
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 mt-1">
                <p className="font-weight-bold">Filter :</p>
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
                          name="query"
                          onChange={handleFilter}
                        />
                        DKI Jakarta
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Jawa Barat"
                          name="query"
                          onChange={handleFilter}
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
                          name="query"
                          onChange={handleFilter}
                        />
                        Video Editing
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="HTML"
                          name="query"
                          onChange={handleFilter}
                        />
                        HTML
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Adobe Illustrator"
                          name="query"
                          onChange={handleFilter}
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
                          name="query"
                          onChange={handleFilter}
                        />
                        Manager
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Senior Software Engineer"
                          name="query"
                          onChange={handleFilter}
                        />
                        Senior Software Engineer
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Full Stack Web Developer"
                          name="query"
                          onChange={handleFilter}
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

              {data.map((items, index) => (
                <Fragment key={index}>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-3">
                          <img className="img-fluid" src="/bg-home.jpg" />
                        </div>
                        <div className="col-md-6 mb-auto mt-auto">
                          <div className="job-description">
                            <div className="job-title">
                              {items.posisi_pekerjaan}
                            </div>
                            <div className="corporate">
                              {items.nama_perusahaan}
                            </div>
                            <div className="job-location">
                              {items.provinsi}, {items.kota}
                            </div>
                            <div className="salary">
                              <NumberFormat
                                value={items.gaji_min}
                                displayType={"text"}
                                thousandSeparator="."
                                decimalSeparator=","
                                prefix={"Rp "}
                              />{" "}
                              -{" "}
                              <NumberFormat
                                value={items.gaji_max}
                                displayType={"text"}
                                thousandSeparator="."
                                decimalSeparator=","
                                prefix={"Rp "}
                              />{" "}
                              / Bulan
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mr-2 mt-auto mb-auto">
                          <a
                            href="/jobdetail"
                            className="btn btn-primary btn-block"
                          >
                            Detail
                          </a>
                          <a href="#" className="btn bg-custom-12 btn-block">
                            Simpan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-4">
                <nav aria-label="Page navigation example ">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &lt;
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
                        &gt;
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
