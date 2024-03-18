import StudentsPic from "../assets/images/students_joy.jpeg";
const LifeAtVit = () => {
  return (
    <div className="container-fluid life-at-vit">
      <h2 className="text-center text-uppercase fw-bold pt-2">
        Campus Life at VIT, Pune
      </h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Co-curricular Activities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Sports
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Clubs
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active w-full"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <img src={StudentsPic} className="panel-image" alt="" />
          <div className="container">
            <p className="lead">
              With a legacy of over 40 years, VIT, Pune is one of the best
              engineering colleges in Pune, with a meritorious track record in
              academics, placements and holistic growth, making it a veritable
              Cradle of Achievers. The Institute offers{" "}
              <span>Chemical Engineering</span>,
              <span> Computer Engineering</span>,{" "}
              <span>Electronics & Telecommunication Engineering</span>,
              <span> Engineering</span>, <span>Science & Humanities</span>,{" "}
              <span>Industrial & Production</span>,<span> Instrumentation</span>
              , <span>Information Technology</span>,{" "}
              <span>Mechanical Engineering</span>,{" "}
              <span>AI & Data Science</span>,{" "}
              <span>Computer Sciences & Engineering (AI)</span>,{" "}
              <span>Computer Sciences and Engineering (AI & ML)</span>, and{" "}
              <span>Multidisciplinary Engineering</span>.
            </p>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <img src={StudentsPic} className="panel-image" alt="" />
          <div className="container">
            <p className="lead">
              With a legacy of over 40 years, VIT, Pune is one of the best
              engineering colleges in Pune, with a meritorious track record in
              academics, placements and holistic growth, making it a veritable
              Cradle of Achievers. The Institute offers{" "}
              <span>Chemical Engineering</span>,
              <span> Computer Engineering</span>,{" "}
              <span>Electronics & Telecommunication Engineering</span>,
              <span> Engineering</span>, <span>Science & Humanities</span>,{" "}
              <span>Industrial & Production</span>,<span> Instrumentation</span>
              , <span>Information Technology</span>,{" "}
              <span>Mechanical Engineering</span>,{" "}
              <span>AI & Data Science</span>,{" "}
              <span>Computer Sciences & Engineering (AI)</span>,{" "}
              <span>Computer Sciences and Engineering (AI & ML)</span>, and{" "}
              <span>Multidisciplinary Engineering</span>.
            </p>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <img src={StudentsPic} className="panel-image" alt="" />
          <div className="container">
            <p className="lead">
              With a legacy of over 40 years, VIT, Pune is one of the best
              engineering colleges in Pune, with a meritorious track record in
              academics, placements and holistic growth, making it a veritable
              Cradle of Achievers. The Institute offers{" "}
              <span>Chemical Engineering</span>,
              <span> Computer Engineering</span>,{" "}
              <span>Electronics & Telecommunication Engineering</span>,
              <span> Engineering</span>, <span>Science & Humanities</span>,{" "}
              <span>Industrial & Production</span>,<span> Instrumentation</span>
              , <span>Information Technology</span>,{" "}
              <span>Mechanical Engineering</span>,{" "}
              <span>AI & Data Science</span>,{" "}
              <span>Computer Sciences & Engineering (AI)</span>,{" "}
              <span>Computer Sciences and Engineering (AI & ML)</span>, and{" "}
              <span>Multidisciplinary Engineering</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtVit;
