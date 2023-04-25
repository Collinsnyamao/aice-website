import React, { useEffect, useState } from "react";
import HeroBackground from "../../assets/HeroBackground.png";
import Logo from "../../assets/Final-AICELogo.png";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { requestThunk } from "../../redux/features/request";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../redux/features/message";

function PasswordRequest() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // individual initialValues
  const initialValues = {
    email: "",
  };

  // validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
  });

  const handleRequest = (formValue, helpers) => {
    const { email } = formValue;
    setLoading(true);
    dispatch(
      requestThunk({
        email,
      })
    )
      .unwrap()
      .then(() => {
        helpers.resetForm();
        console.log("Request Message Successful");
        setMessage(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMessage(false);
        setLoading(false)
      });
  };
  return (
    <RequestContainer className="md:flex w-full">
      <RequestLeft className="hidden md:block w-1/2">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ marginTop: "40vh" }} src={Logo} alt="logo" />
        </div>
      </RequestLeft>
      <div className="blue--background md:w-1/2 w-12/12 h-screen">
        <h6 className="text-center pt-32">
          Artificial Intelligence Center <br /> of Excellence Africa
        </h6>
        <h6 className="text-center mt-4 mb-4" style={{ color: "#F5D537" }}>
          Forgot password
        </h6>
        <p className="text-center mt-4" style={{ fontSize: "12px" }}>
          Enter your email adress and we shall send you <br /> a password reset
          link to your email.
        </p>

        <div className="md:w-7/12 w-10/12 mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRequest}
          >
            <Form>
              <div className="flex flex-col mt-4">
                {message && (
                  <p className="text-yellow text-xs text-center">
                    Check your email for password reset link
                  </p>
                )}
                <div className="flex items-center">
                  <Field
                    className="input"
                    style={{
                      height: "6vh",
                      border: "1px solid #F5D537",
                      background: "transparent",
                      width: "100%",
                    }}
                    type="email"
                    placeholder="email..."
                    name="email"
                  />
                  <IoMdMail
                    style={{
                      backgroundColor: "#F5D537",
                      height: "6vh",
                      color: "black",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      fontSize: "30px",
                    }}
                  />
                </div>
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-yellow text-xs"
              />
              <button
                type="submit"
                className="bg-white text-black my-4 py-2 w-full"
                style={{ marginBottom: "7vh" }}
              >
                Request Password Reset
                {loading && (
                  <span className="spinner-border ml-2 spinner-border-sm"></span>
                )}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </RequestContainer>
  );
}

const RequestContainer = styled.div`
  height: 100vh;
`;

const RequestLeft = styled.div`
  background: url(${HeroBackground});
  background-size: cover;
  background-position: top-center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const FormContainer = styled.section`
  // width: 40%;
  // margin: auto;
`;

export default PasswordRequest;
