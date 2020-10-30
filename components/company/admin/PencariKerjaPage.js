import React from "react";

export default function PencariKerjaPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span>List Pencari Kerja</span>
          </div>
        </div>
        <div className="card-right-job-detail p-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-custom-3"
              placeholder="Cari Pengguna"
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
                <th scope="col" className=" text-secondary">
                  NAMA
                </th>
                <th scope="col" className="text-center text-secondary">
                  EMAIL
                </th>
                <th scope="col" className=" text-secondary">
                  TANGGAL GABUNG
                </th>
                <th scope="col" className="text-center text-secondary">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-primary">
                  <a
                    href="/company/admin/detailuser"
                    className="bg-none text-primary"
                  >
                    Bufi Agusta
                  </a>
                </td>
                <td className="text-center">budi@gmail.com</td>
                <td>23/06/2020</td>
                <td className="text-success text-center">Aktif</td>
              </tr>
              <tr>
                <td className="text-primary">
                  <a
                    href="/company/admin/detailuser"
                    className="bg-none text-primary"
                  >
                    Agustina Dewi
                  </a>
                </td>
                <td className="text-center">tinaags@gmail.com</td>
                <td>23/06/2020</td>
                <td className="text-warning text-center">
                  Menunggu Verifikasi
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
