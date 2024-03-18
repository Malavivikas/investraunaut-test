import { Link } from "react-router-dom";
import speakerSVG from "../assets/images/speaker.svg";

const NoticeBoard = () => {
  return (
    <div className="container-fluid notice-board mt-5 bg-primary-subtle p-5">
      <div className="container">
        <h3 className="d-flex justify-content-center mb-4">Notice Board</h3>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="row">
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="row">
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-md-row justify-content-center align-items-top gap-4">
                  <div>
                    <img src={speakerSVG} alt="" className="speaker" />
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <Link className="fw-bold" to="#">
                        Click here to know your exam schedule
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
