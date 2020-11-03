import React from "react";

export default function HeaderAdminLogin() {
  return (
    <>
      <header className="mb-5">
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
              <form className="form-inline my-2 my-lg-0 ml-lg-5">
                <div className="col-md-11 col-lg-10">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="col-md-1">
                  <button>
                    <i className="fas fa-search ml-auto" />
                  </button>
                </div>
              </form>
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">
                  <span>Login Admin</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
