import React from 'react'

export default function DetailUndanganPage() {
  return (
    <>
      <div className="col-md-7 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card-right-detail-undangan-interview">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Undangan Interview oleh Orangtua Group</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-5">
                <p>
                  Hai, Budi <br />
                  Terimakasih sudah melamar di perusahaan kami . kami sangat
                  tertarik dengan profile yang anda kirim kan . Semoga kita bisa
                  bekerjasama segera . Agus Hartono HRD Elemeno Tech
                </p>
              </div>
              <div className="col-md-12 mt-5 mb-5">
                <div className="posisition">
                  Posisi yang dilamar : Data Analyst
                </div>
                <div className="tanggal">Tanggal Wawancara : 12/03/2019</div>
                <div className="waktu">
                  Waktu Wawarancara : 10.00 - 11.00 WIB
                </div>
                <div className="metode">
                  Metode Wawarancara : Video Conference
                </div>
                <div className="penanggung-jawab">
                  Nama Penanggung Jawab : Agus Hartono
                </div>
                <div className="email-penanggung-jawab">
                  Email : agushrt@elemeno.co.id
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <a href="#" className="btn btn-primary">
                  Konfirmasi Jadwal
                </a>
                <a href="#" className="btn btn-danger ml-3">
                  Ajukan Reschedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
