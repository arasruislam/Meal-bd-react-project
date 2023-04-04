import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident ducimus nemo repellendus eos dolorum similique suscipit
              maiores ex quidem aliquid nesciunt, cupiditate vero? Quia cum
              deserunt voluptas quibusdam porro doloremque aliquam delectus,
              minima quis doloribus similique repellendus omnis fuga sequi vitae
              consequatur obcaecati voluptates officiis ipsum culpa sapiente
              ipsa? Eum.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn btn-primary">
                  Login
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Login Option Coming Soon{" "}
                    </h3>

                    <div className="modal-action">
                      <label htmlFor="my-modal" className="btn btn-info">
                        Close
                      </label>
                    </div>
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

export default Contact;
