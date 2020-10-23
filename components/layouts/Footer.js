import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container ">
          <div className="row pt-5">
            <div className="col-md-3">
              <h3>Minejobs</h3>
              <p>Lorem Ipsum is simply dummy text of the</p>
            </div>
            <div className="col-md-3">
              <h3>Pencari Kerja</h3>
              <a href="#">Daftar</a>
            </div>
            <div className="col-md-3">
              <h3>Perusahaan</h3>
              <a href="#">Pasang Iklan</a>
            </div>
            <div className="col-md-3">
              <h3>Kontak Kami</h3>
              <div className="row mt-3">
                <div className="col-md-12">
                  <img
                    src="/assets/icon/wa.svg"
                    className="d-inline"
                    alt=""
                    height={24}
                  />
                  <p className="d-inline ml-2">+62 8223004484</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <img
                    src="/assets/icon/gmail.svg"
                    className="d-inline"
                    alt=""
                    height={24}
                  />
                  <p className="d-inline ml-2">sales@minejob.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <a href="#">Tentang Kami</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <a href="#">Kebijakan Penggunaan</a>
            </div>
          </div>
        </div>
        <div className="bg-gray mt-5">
          <div className="container">Minejobs 2020</div>
        </div>
      </footer>
    </>
  )
}
