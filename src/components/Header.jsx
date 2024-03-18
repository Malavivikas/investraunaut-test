import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import mobileLogo from "../assets/images/vit-logo.png";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <nav className="container navbar navbar-expand-lg bg-body-bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={isMobile ? mobileLogo : logo}
              alt="Logo"
              className="logo"
            />
          </Link>
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/naac">
                  NAAC
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/iqac">
                  IQAC
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </nav>
      <nav className="container custom-nav bg-body-bg">
        <ul
          style={{ listStyleType: "none" }}
          className="d-flex flex-row flex-wrap justify-content-start justify-content-lg-end gap-4 mb-2 mb-lg-0"
        >
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              Academics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              Admissions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              Placements
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              Rankings and Accreditation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              International Relations
            </Link>
          </li>
        </ul>
      </nav>
      <Carousel />
    </header>
  );
};

export default Header;
