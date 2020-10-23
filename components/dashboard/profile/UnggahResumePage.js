import React from "react";

export default function UnggahResumePage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" className="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div className="card-right-unggahBerkas">
          <div className="container">
            <h5>
              <i className="fas fa-cloud-upload-alt" />
              Unggah Resume
            </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="custom-file">
                          <label htmlFor="berkas">Pilih Berkas</label>
                          <input
                            type="file"
                            className="form-control"
                            id="foto"
                            aria-describedby="berkas"
                            placeholder="Pilih Berkas"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-primary mb-3 mt-3"
                      >
                        Upload Berkas
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
