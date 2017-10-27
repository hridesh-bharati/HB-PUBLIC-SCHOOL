const Header = () => {
  return (
    <header>
      {/* Top Info Bar */}
      <div className="bg-danger text-white py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
            <span className="mx-3">|</span>
            <i className="bi bi-envelope-fill me-2"></i> info@drishteeschool.in
          </div>
          <div>
            <a href="#" className="text-white text-decoration-none me-3">
              🧭 Find Us
            </a>
            <a href="#" className="text-white text-decoration-none">
              🔔 Notices
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon shadow-sm sticky-top">
        <div className="container">
          {/* Logo / Brand */}
          <a className="navbar-brand fw-bold fs-4 text-warning" href="#">
            🎓 Drishtee School
          </a>

          {/* Toggler */}
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

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-semibold align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>

              {/* Dropdown 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="academicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Curriculum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Achievements
                    </a>
                  </li>
                </ul>
              </li>

              {/* Dropdown 2 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="campusDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Campus Life
                </a>
                <ul className="dropdown-menu" aria-labelledby="campusDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Clubs & Activities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sports
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Admission
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a className="btn btn-warning fw-bold text-maroon px-3" href="#">
                  Enquiry Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom CSS */}
      <style>{`
        .bg-maroon {
          background-color: #7b1113 !important;
        }
        .text-maroon {
          color: #7b1113 !important;
        }
        .navbar-nav .nav-link {
          color: #fff !important;
          position: relative;
          transition: color 0.3s ease;
          padding: 0.6rem 1rem;
        }
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          background-color: #ffc107;
          left: 0;
          bottom: 0;
          transition: width 0.3s ease;
        }
        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 100%;
        }
        .navbar-nav .nav-link:hover {
          color: #ffc107 !important;
        }
        .dropdown-menu {
          border-radius: 10px;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .dropdown-item:hover {
          background-color: #ffc107;
          color: #7b1113 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
