import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="btn btn-outline-primary ms-auto px-4 rounded-pill "
            type="submit"
          >
            <i class="fa fa-sign-in me-2"></i>
            Login
          </button>
          <button
            className="btn btn-outline-primary ms-2 px-4 rounded-pill "
            type="submit"
          >
            <i class="fa fa-user-plus me-2"></i>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
