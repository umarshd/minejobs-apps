import React from "react";

export default function PerusahaanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span>List Perusahaan</span>
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
                  Perusahaan
                </th>
                <th scope="col" className="text-secondary">
                  Status
                </th>
                <th scope="col" className="text-center text-secondary">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PT Panpanoe</td>
                <td className="text-success">Aktif</td>
                <td>
                  <a
                    href="/company/admin/detailperusahaan"
                    className="btn bg-custom-2 btn-block"
                  >
                    detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>PT Karya Anak Bangsa</td>
                <td className="text-warning">Menunggu Verifikasi</td>
                <td>
                  <a
                    href="/company/admin/detailperusahaan"
                    className="btn bg-custom-2 btn-block"
                  >
                    detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>NET Mediatama</td>
                <td className="text-success">Aktif</td>
                <td>
                  <a
                    href="/company/admin/detailperusahaan"
                    className="btn bg-custom-2 btn-block"
                  >
                    detail
                  </a>
                </td>
              </tr>
              <tr className="">
                <td>Google Inc</td>
                <td className="text-danger">Dibatasi</td>
                <td>
                  <a
                    href="/company/admin/detailperusahaan"
                    className="btn bg-custom-2 btn-block"
                  >
                    detail
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
