import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/UserContext";
import Cookies from "js-cookie";
import axios from "axios";

export default function HeaderHomePage() {
  const router = useRouter();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token, uid } = useContext(UserContext);

  console.log(token);
  console.log(uid);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/kandidat/register"}`;

    axios({
      url: API,
      method: "POST",
      data: {
        email: form.emailSignup,
        password: form.passwordSignup,
        password_confirmation: form.passwordSignup,
      },
    })
      .then((res) => {
        console.log(res);
        const userId = res.data.user;
        Cookies.set("token", res.data.token, { expires: 7 });
        Cookies.set("uid", userId.id, { expires: 7 });
        window.location.href = "/profile/profilesetup";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    const API = `${process.env.NEXT_PUBLIC_ENDPOINT + "api/kandidat/login"}`;

    axios({
      url: API,
      method: "POST",
      data: {
        email: form.emailLogin,
        password: form.passwordLogin,
        password_confirmation: form.passwordLogin,
      },
    })
      .then((res) => {
        const userId = res.data.user;
        Cookies.set("token", res.data.token, { expires: 7 });
        Cookies.set("uid", userId.id, { expires: 7 });
        window.location.href = "/editprofile";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              {/* Mine<span>jobs</span> */}
              <img src="/Logo.png" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  DAFTAR
                </a>
                <a
                  className="nav-item nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  MASUK
                </a>
                <a
                  className="nav-item nav-link btn btn-warning text-white"
                  href="/company"
                >
                  PERUSAHAAN
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Modal Signup*/}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-5">
              <div className="modal-body text-center">
                <h4>Gabung Sekarang</h4>
                <p>Buat Akun</p>
                <a href="#" className="bg-form-input p-3">
                  <img src="/assets/icon/google.svg" height={32} alt="" />{" "}
                  Daftar Dengan Google
                </a>
                <p className="mt-3">
                  Atau
                  <br />
                  Daftar Dengan Email
                </p>
                {loading ? (
                  <>
                    <p>Please wait...</p>
                  </>
                ) : (
                  <>
                    <form onSubmit={handleRegister} className="signupForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              aria-describedby="firstName"
                              placeholder="Nama Depan"
                              name="firstName"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              aria-describedby="lastName"
                              placeholder="Nama Belakang"
                              name="lastName"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="emailSignup"
                              aria-describedby="email"
                              placeholder="Email"
                              name="emailSignup"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="passwordSignup"
                              aria-describedby="password"
                              placeholder="Kata Sandi"
                              name="passwordSignup"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row text-left pl-1">
                        <div className="col-md-12">
                          <div className="form-check form-check-inline ">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              defaultValue="setuju"
                              name="signupCheck"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label mt-4 ml-1"
                              htmlFor="inlineCheckbox1"
                            >
                              Saya telah setuju dengan syarat dan ketentuan yang
                              berlaku
                            </label>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary mt-4 mb-4">
                        Daftar Sekarang
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Modal login*/}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-5">
              <div className="modal-body text-center">
                <h4>Masuk</h4>
                <p>Temukan Pekerjaan Impian</p>
                <a href="#" className="bg-form-input p-3">
                  <img src="/assets/icon/google.svg" height={32} alt="" /> Masuk
                  Dengan Google
                </a>
                <p className="mt-3">
                  Atau
                  <br />
                  Masuk Dengan Email
                </p>
                {loading ? (
                  <>
                    <p>Please wait...</p>
                  </>
                ) : (
                  <>
                    <form onSubmit={handleLogin} className="loginForm">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="emailLogin"
                              aria-describedby="email"
                              placeholder="Email"
                              name="emailLogin"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="passwordLogin"
                              aria-describedby="password"
                              placeholder="Kata Sandi"
                              name="passwordLogin"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary mt-4 mb-4">
                        Masuk
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <div className="row justify-content-center">
              <h1 className="tagline">
                Temukan Kesempatan Terbaik <br />
                #BangunSuksesAnda
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="bg-white">
                <input
                  type="text"
                  placeholder="Cari Berdasarkan: Posisi, Jenis Pekerjaan, Lokasi"
                />
                <button className="btn btn-warning">cari</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
