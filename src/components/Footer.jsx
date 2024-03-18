import { Link } from "react-router-dom";
import logo from "../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center pt-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex flex-column gap-5">
            <div>
              <Link className="navbar-brand" to="/">
                <img src={logo} className="footer-logo" alt="Logo" />
              </Link>
            </div>
            <div>
              <h5>Admissions</h5>
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <p className="fs-6 fw-medium p-0 m-0">Call:</p>
                  <p className="fs-6 fw-normal">91 - 7058432258 / 8793428634</p>
                </div>
                <div>
                  <p className="fs-6 fw-medium p-0 m-0">Office Timings:</p>
                  <p className="fs-6 fw-normal">
                    Monday to Friday | 10 am to 5 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h5>VIT, Pune</h5>
            <ul className="list-group bg-transparent">
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/programmes"
                >
                  Programmes
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/departments"
                >
                  Departments
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/admissions"
                >
                  Admissions
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/placements"
                >
                  Placements
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/fees"
                >
                  Fees
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/sister"
                >
                  Sister Institutes
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/news"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-1">
            <h5>Connect</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/naac"
                >
                  NAAC
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/iqac"
                >
                  IQAC
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/relations"
                >
                  International Relations
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="list-group-item bg-transparent border border-0 m-0 p-0">
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <h5>Vishwakarma Institute of Technology</h5>
            <p className="fs-6">
              666, Upper Indiranagar, Bibwewadi, Pune, Maharashtra, INDIA - 411
              037.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4421288998346!2d73.8656287751903!3d18.46362188261891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1710528811668!5m2!1sen!2sin"
              width="450"
              height="210"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright p-4">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <p>All rights Reserved © VIT, 2024</p>
            <p>
              Made with <span className="heart">❤</span> by{" "}
              <span className="company-name">Investronaut</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
