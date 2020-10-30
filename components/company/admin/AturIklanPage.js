import React from "react";

export default function AturIklanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span>Atur Iklan</span>
          </div>
        </div>
        <div className="card-right-job-detail p-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-custom-3"
              placeholder="Cari Perusahaan"
            />
            <div className="input-group-append">
              <button className="btn bg-custom-3-btn" type="button">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="text-secondary">
                  POSISI PEKERJAAN
                </th>
                <th scope="col" className="text-secondary">
                  PERUSAHAAN
                </th>
                <th scope="col" className="text-secondary">
                  TANGGAL TAYANG
                </th>
                <th scope="col" className="text-center text-secondary">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="/company/admin/detailiklan"
                    className="bg-none text-primary"
                  >
                    Frontend web developer
                  </a>
                </td>
                <td>PT Panpanoe</td>
                <td>23/06/2020</td>
                <td className="text-success text-center">Sedang Tayang</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="/company/admin/detailiklan"
                    className="bg-none text-primary"
                  >
                    Fullstack Web Developer
                  </a>
                </td>
                <td>PT Karya Anak Bangsa</td>
                <td>23/06/2020</td>
                <td className="text-success" text-center>
                  Sedang Tayang
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="/company/admin/detailiklan"
                    className="bg-none text-primary"
                  >
                    Data Scientist
                  </a>
                </td>
                <td>NET Mediatama</td>
                <td>23/04/2020</td>
                <td className="text-danger text-center">Berakhir</td>
              </tr>
              <tr className="">
                <td>
                  <a
                    href="/company/admin/detailiklan"
                    className="bg-none text-primary"
                  >
                    Dev Ops
                  </a>
                </td>
                <td>Google Inc</td>
                <td>23/04/2020</td>
                <td className="text-danger text-center">Berakhir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
