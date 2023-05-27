import { Button, Input } from "antd";

const Login = () => {
  return (
    <>
      <section class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-5 fw-bold ls-tight text-white">
                Complete School <br />
                <span>Managment System</span>
              </h1>
              <p class="mb-4 opacity-70 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                class="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                class="position-absolute shadow-5-strong"
              ></div>

              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
                  <form>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">
                        Email address
                      </label>
                      <Input
                        className="input"
                        placeholder="Enter your username"
                        prefix={<i className="ri-mail-send-fill"></i>}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                      <Input
                        className="input "
                        placeholder="Enter your passsword"
                        prefix={<i className="ri-lock-unlock-fill"></i>}
                      />
                    </div>

                    <Button className="login">Login</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
