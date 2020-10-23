import React from 'react'

export default function DataDiriPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
    <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-datadiri">
          <div className="container">
            <h5>
              <i className="fas fa-address-card" />Data Diri
      </h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="firstName">Nama Depan</label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="Nama Depan" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="lastName">Nama Belakang</label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Nama Belakang" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Nomer Telepon</label>
                        <input type="number" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Nomer Telepon" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="domisili">Domisili</label>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <select className="custom-select" id="provisi">
                        <option selected>Provinsi</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <select className="custom-select" id="kota">
                        <option selected>Kota</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="custom-file">
                          <label htmlFor="foto">Unggah Foto Profile</label>
                          <input type="file" className="form-control" id="foto" aria-describedby="foto" placeholder="Pilih Berkas" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="tentang">Tentang Anda</label>
                        <textarea className="form-control" id="tentang" rows={3} defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button type="submit" className="btn btn-primary mb-3 mt-3">
                        Simpan
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
  )
}
