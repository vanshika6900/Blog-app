import React from "react";
import image from "../Components/blogg.png";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <div class="row main-content bg-success text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
              <img src={image} alt="" className="image" />
            </span>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form pt-2">
            <div class="container-fluid">
              <div class="row">
                <h2>Sign Up </h2>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>

                  <div class="row flex justify-content-center">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn2"
                      style={{ height: "40px" }}
                    />
                  </div>
                </form>
              </div>
              <div class="row flex justify-content-center">
                <p>
                  Already have an account?{" "}
                  <a
                    href="/"
                    style={{ color: "#008080", textDecoration: "none" }}
                    onClick={() => navigate("/login")}
                  >
                    Login Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
