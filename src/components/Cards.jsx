import labImg from "../assets/images/lab_technician.jpeg";
import resouces from "../assets/images/student_resources.jpeg";
import convocation from "../assets/images/convocation_program.jpeg";
const Cards = () => {
  return (
    <div className="cards mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="image-container position-relative">
              <img src={labImg} className="img-fluid" alt="Placeholder" />
              <div className="overlay d-flex align-items-end justify-content-start ps-4">
                <div className="text-white">
                  <h6 className="bg-info d-inline-block p-1 ">Research</h6>
                  <p>
                    Research and innovation are integral parts of learning at
                    VIT, Pune.
                  </p>
                  <p className="fw-bold">Know more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container position-relative">
              <img src={resouces} className="img-fluid" alt="Placeholder" />
              <div className="overlay d-flex align-items-end justify-content-start ps-4">
                <div className="text-white">
                  <h6 className="bg-info d-inline-block p-1 ">Research</h6>
                  <p>
                    Research and innovation are integral parts of learning at
                    VIT, Pune.
                  </p>
                  <p className="fw-bold">Know more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container position-relative">
              <img src={convocation} className="img-fluid" alt="Placeholder" />
              <div className="overlay d-flex align-items-end justify-content-start ps-4">
                <div className="text-white">
                  <h6 className="bg-info d-inline-block p-1 ">Research</h6>
                  <p>
                    Research and innovation are integral parts of learning at
                    VIT, Pune.
                  </p>
                  <p className="fw-bold">Know more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
