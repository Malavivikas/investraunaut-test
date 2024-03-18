import gallery from "../assets/images/events_gallery.jpg";
const FollowUs = () => {
  return (
    <div className="container-fluid follow-us bg-primary-subtle">
      <h2 className="text-center text-uppercase fw-bold mt-2 pt-5">
        Campus Life at VIT, Pune
      </h2>
      <ul className="nav nav-tabs bg-body-bg" id="myTab" role="tablist">
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
            LinkedIn
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
            Instagram
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
            Facebook
          </button>
        </li>
      </ul>
      <div
        className="tab-content d-flex justify-content-center"
        id="myTabContent"
      >
        <div
          className="tab-pane fade show active w-full"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <img src={gallery} className="panel-image" alt="" />
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <img src={gallery} className="panel-image" alt="" />
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <img src={gallery} className="panel-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
