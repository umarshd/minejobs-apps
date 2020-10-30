import React from "react";

export default function TambahAdminPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom-company" role="alert">
          <div className="container mt-0">
            <span>Tambah Admin</span>
          </div>
        </div>
        <div className="card-right-cari-lowongan">
          <div className="row justify-content-center mt-5">
            <div className="col-md-7">
              <h5 className="text-center mb-4">Tambah Admin</h5>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="emailAdmin"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-primary btn-block">
                      KIRIM UNDANGAN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
