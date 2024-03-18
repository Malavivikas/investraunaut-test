import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news">
      <ul className="nav">
        <li className="nav-item bg-primary">
          <Link className="nav-link active" aria-current="page" to="#">
            Latest News:
          </Link>
        </li>
        <li className="nav-item bg-primary-subtle">
          <Link className="nav-link" to="#">
            Admission Enquiry Form: B. Tech for Working Professionals
          </Link>
        </li>
        <li className="nav-item bg-primary-subtle">
          <Link className="nav-link" to="#">
            B. Tech for Working Professionals
          </Link>
        </li>
        <li className="nav-item bg-primary-subtle">
          <Link className="nav-link" to="#">
            B. Tech for Working Prof
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default News;
