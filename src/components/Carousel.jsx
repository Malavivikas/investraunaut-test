import SliderImg from "../assets/images/hero-image.jpeg";
import News from "./News";
const Carousel = () => {
  return (
    <div className="hero container">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
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
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={SliderImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Engineer The <span>Future</span> You Want To See
              </h2>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={SliderImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Engineer The <span>Future</span> You Want To See
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={SliderImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Engineer The <span>Future</span> You Want To See
              </h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <News />
    </div>
  );
};

export default Carousel;
