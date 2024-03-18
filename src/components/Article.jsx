import { Link } from "react-router-dom";
import svg from "../assets/images/arrow.svg";
import College from "../assets/images/college_up_view.jpeg";
const Article = () => {
  return (
    <div className="article container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src={College}
            width="500"
            height="500"
            className="img-fluid mx-auto"
          />
        </div>
        <div className="col-md-6">
          <h2 className="title text-uppercase">
            The Cradle of Achievers
            <img src={svg} alt="" width={100} height={50} />
          </h2>
          <p className="lead">
            Since its inception in 1983, Vishwakarma Institute of Technology,
            Pune (VIT, Pune) has believed in providing education that empowers
            its students. A rigorous focus on academic excellence, a culture of
            research and innovation and a thriving learning environment have
            made it a top engineering college in Pune. VIT, Pune, has had an
            illustrious track record of achievements and achievers in leadership
            positions worldwide.
          </p>
          <Link to="#" className="link fw-bold link-underline-light">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
