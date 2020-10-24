import React from "react";

export default function PerusahaanPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="card-right-job-detail p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Perusahaan</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PT Panpanoe</td>
                <td className="text-success">Aktif</td>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
              </tr>
              <tr>
                <td>PT Karya Anak Bangsa</td>
                <td className="text-warning">Menunggu Verifikasi</td>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
              </tr>
              <tr>
                <td>NET Mediatama</td>
                <td className="text-success">Aktif</td>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
              </tr>
              <tr className="">
                <td>Google Inc</td>
                <td className="text-danger">Dibatasi</td>
                <td>detail</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
