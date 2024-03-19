export default function About() {
  return (
    <div className="py-16 bg-light">
      <div className="container text-secondary">
        <div className="row d-flex items-center gap-5">
          <div className="col-md-5">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              width={"100%"}
              height={"auto"}
            />
          </div>
          <div className="col-md-7 col-lg-6">
            <h2 className="text-xl text-secondary fw-bold">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-secondary -600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-secondary -600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
