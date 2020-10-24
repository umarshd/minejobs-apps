import React from "react";
import Link from "next/link";

export default function ProfileSetupPage() {
  return (
    <>
      <div className="col-md-8 col-lg-9">
        <div className="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div className="card card-right-profile-setup">
          <Link href="/../datadiri" className="p-4">
            <a className="p-4">Buat Profile Sekarang</a>
          </Link>
        </div>
      </div>
    </>
  );
}
