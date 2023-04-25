import React, { useEffect } from "react";
import styled from "styled-components";
import "../../assets/css/login.css";

import { MdEmail } from "react-icons/md";
import { BsUnlockFill } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";

import FinalAICELogo from "../../assets/Final-AICELogo.png";
import HeroBackground from "../../assets/bg.png";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/features/authenctication";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../redux/features/message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue, helpers) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        history("/", { replace: true });
        console.log("Login Successfull");
        helpers.resetForm();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <LoginWrapper className="md:flex items-center justify-center">
        <LoginImage className="md:flex justify-center items-center w-1/2 md:block hidden">
          <img src={FinalAICELogo} alt="AICE Logo" />
        </LoginImage>
        <LoginText className="md:w-1/2 w-full">
          <p className="text-center uppercase">Welcome to</p>

          <p className="text-center uppercase ">
            Artificial Intelligence center <br /> of excellence africa
          </p>

          <p className="text-center text-yellow my-2">Login</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="md:w-6/12 w-10/12 mx-auto">
              <div className="my-6 flex items-center border-1 border-yellow">
                <Field
                  className="outline-none bg-transparent w-full p-2 form"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />

                <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                  <MdEmail className="text-2xl text-black" />
                </div>
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-yellow text-xs"
              />
              <div className="my-6 flex items-center border-1 border-yellow">
                <Field
                  className="outline-none bg-transparent w-full p-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                  <BsUnlockFill className="text-2xl text-black" />
                </div>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-yellow text-xs"
              />
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <Field type="checkbox" />
                  <label className="text-sm">Remember me</label>
                </div>
                <div>
                  <Link
                    to="/reset"
                    className="text-sm"
                    style={{ color: "#F5D537" }}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="my-4">
                <button
                  type="submit"
                  className="bg-white text-black flex items-center justify-center gap-1 w-full font-semibold py-2"
                >
                  <MdOutlineLogin />
                  Login
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
              <p className="text-sm">
                Do not have an account?{" "}
                <Link to="/register" style={{ color: "#F5D537" }}>
                  Sign Up Now
                </Link>
              </p>
            </Form>
          </Formik>
        </LoginText>
      </LoginWrapper>
    </>
  );
}

const LoginWrapper = styled.section`
  // display: flex;
  // justify-content-between;
  // width: 100%;
`;

const LoginImage = styled.div`
  background-image: url(${HeroBackground});
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  height: 100vh;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
`;

const LoginText = styled.div`
  background: #10142d;
  color: #fff;
  height: 100vh;
  // width: 50%;
  padding: 8rem 0;
`;

export default Login;
