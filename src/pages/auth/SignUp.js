import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

import FinalAICELogo from "../../assets/Final-AICELogo.png";
import HeroBackground from "../../assets/bg.png";
import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/features/authenctication";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../redux/features/message";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const message = useSelector((state) => state.message);
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    description: "",
    company: "",
    designation: "",
    password: "",
  };

  // validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    firstname: Yup.string().required("This field is required!"),
    lastname: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    description: Yup.string().required("This field is required!"),
    company: Yup.string().required("This field is required!"),
    designation: Yup.string().required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  // register function
  const handleRegister = (formValue, helpers) => {
    const {
      username,
      firstname,
      lastname,
      email,
      description,
      company,
      designation,
      password,
    } = formValue;
    setLoading(true);
    setSuccessful(false);
    dispatch(
      register({
        username,
        firstname,
        lastname,
        email,
        description,
        company,
        designation,
        password,
      })
    )
      .unwrap()
      .then(() => {
        setSuccessful(true);
        helpers.resetForm();
        history("/login");
        console.log("Registration successfull");
        setLoading(false);
      })
      .catch((err) => {
        setSuccessful(false);
        console.log(err.response);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="md:flex grid bg-blue">
        <div className="w-1/2 hidden md:block">
          <SignUpImage className="flex justify-center items-center h-screen">
            <img src={FinalAICELogo} alt="AICE Logo" />
          </SignUpImage>
        </div>
        <div className="mx-auto">
          <SignUpText className="mx-auto md:h-screen h-auto">
            <p className="text-center uppercase" style={{ paddingTop: "13vh" }}>
              Artificial centre of excellence africa
            </p>

            <p className="text-center uppercase my-4">Create an account</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              <Form>
                <div className="row container">
                  <div className="col-md-6">
                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="username"
                        name="username"
                      />

                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="firstname"
                        name="firstname"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="lastname"
                        name="lastname"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="email"
                        placeholder="email"
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
                  </div>
                  <div className="col-md-6">
                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="description"
                        name="description"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="company"
                        name="company"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="Designation in the Company"
                        name="designation"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="designation"
                      component="div"
                      className="text-yellow text-xs"
                    />

                    <div className="my-6 flex items-center border-1 border-yellow">
                      <Field
                        className="outline-none bg-transparent w-full p-2 text-sm"
                        type="text"
                        placeholder="password"
                        name="password"
                      />
                      <div className="bg-yellow w-10 h-10 flex items-center justify-center">
                        <MdEmail className="text-2xl text-black" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-yellow text-xs"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <button
                      type="submit"
                      className="bg-white w-7/12 mx-auto text-black d-flex items-center justify-center gap-2"
                    >
                      <FaUserPlus />
                      <p className="mt-3">Sign Up</p>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                    </button>
                    <p
                      className="text-sm my-4"
                      style={{ paddingBottom: "7.1vh" }}
                    >
                      Already have an account?{" "}
                      <Link to="/login" style={{ color: "#F5D537" }}>
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </Formik>
          </SignUpText>
        </div>
        {/* {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )} */}
      </div>
    </>
  );
}

// const SignUpWrapper = styled.section`
//   display: flex;
// `;

const SignUpImage = styled.div`
  background-image: url(${HeroBackground});
  // height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  // height: auto;

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

const SignUpText = styled.div`
  background: #10142d;
  // height: auto;
  color: #fff;
  // height: 100vh;
  // width: 50%;
  // padding: 8rem 0;
`;

export default SignUp;

// handle form submit
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("This is what happens when you click on the submit button");
// };
