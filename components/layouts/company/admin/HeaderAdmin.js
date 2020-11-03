import React from "react";

export default function HeaderAdmin() {
  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Mine<span>jobs</span>
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
                  <span>Dashboard</span>
                </a>
              </div>
              <div class="dropdown">
                <button
                  class="btn bg-none-nav dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Budi
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="/company/dashboard/company">
                    Company
                  </a>
                  <a class="dropdown-item" href="/company/admin/perusahaan">
                    Admin
                  </a>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
