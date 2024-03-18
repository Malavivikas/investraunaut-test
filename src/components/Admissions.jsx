import ugSVG from "../assets/images/admission-ug.svg";
import pgSVG from "../assets/images/admission-pg.svg";
import phdSVG from "../assets/images/admission-phd.svg";
import intSVG from "../assets/images/admission-int.svg";
const Admissions = () => {
  return (
    <div className="admissions container-fluid bg-primary">
      <div className="container p-5">
        <h2 className="text-uppercase text-light">Admissions</h2>
        <div className="row">
          <div className="col d-flex justify-content-evenly align-items-center">
            <img src={ugSVG} alt="" />
            <h5 className="text-light">UG Courses</h5>
          </div>
          <div className="col d-flex justify-content-evenly align-items-center">
            <img src={pgSVG} alt="" />
            <h5 className="text-light">PG Courses</h5>
          </div>
          <div className="col d-flex justify-content-evenly align-items-center">
            <img src={phdSVG} alt="" />
            <h5 className="text-light">PhD Programmes</h5>
          </div>
          <div className="col d-flex justify-content-evenly align-items-center">
            <img src={intSVG} alt="" />
            <h5 className="text-light">International Admissions</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
