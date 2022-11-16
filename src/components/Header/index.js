import React from "react";

function Header() {
  return (
    <div className="container mt-3">
      <div className="row ">
        <nav className="navbar navbar-expand-lg bg-light col-11 ">
          <div className="container-fluid">
            <div className="navbar-brand"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="|">
                    Tek tıkla al |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="|">
                    Sonra öde |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="|">
                    Hızlı iade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
