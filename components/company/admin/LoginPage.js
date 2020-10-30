import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="col-md-8">
        <div className="bg-custom-secondary mb-5 mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 p-5">
              <h5 className="text-center mb-3 font-weight-bold">Login Admin</h5>
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordAdmin"
                    placeholder="Password"
                  />
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      MASUK
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
