import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { clearMessage } from "../redux/features/message";
import { research } from "../redux/features/subscribe";
import { useDispatch, useSelector } from "react-redux";

// import icons from react-icons
import { MdEmail, MdSend } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../assets/bg.png";
import styled from "styled-components";

const Subscribe = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const [loading, setLoading] = useState(false);

  const notify = () => toast.success("Research sent successfully!");

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This is a required field"),
    email: Yup.string().email("This is not a valid email"),
  });

  const handleResearch = (formValue, helpers) => {
    const { name, email } = formValue;
    setLoading(true);
    dispatch(research({ name, email }))
      .unwrap()
      .then((res) => {
        helpers.resetForm();
        notify();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <SubScribe className="md:px-20 px-4 w-full py-1">
      <p className="mt-5 md:font-bold font-thin md:text-xl text-white w-full">
        Want to get involved in our drive for solution based AI Research and
        Development?
      </p>
      <p className="font-normal text-yellow text-sm">
        Leave us your name and email address and we shall get back to you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleResearch}
      >
        <Form className="md:flex grid items-center gap-8 my-8">
          <div className="md:w-5/12 w-full">
            <div className="flex my-2 border-1 border-yellow">
              <Field
                className="outline-none bg-transparent px-3 text-white w-full h-12 font-semibold"
                type="text"
                name="name"
                placeholder="Name"
              />

              <div className="bg-yellow px-3 flex items-center justify-center">
                <BsPersonFill className="text-2xl text-black" />
              </div>
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="text-yellow text-xs"
            />
          </div>
          <div className="md:w-5/12 w-full">
            <div className="my-2 flex border-1 border-yellow">
              <Field
                className="outline-none bg-transparent px-3 text-white w-full h-12 font-semibold"
                type="email"
                name="email"
                placeholder="Email Address"
              />

              <div className="bg-yellow px-3 flex items-center justify-center">
                <MdEmail className="text-2xl text-black" />
              </div>
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-yellow text-xs"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:w-2/12 w-full">
            <button
              type="submit"
              className="bg-yellow text-black md:w-2/5 w-full px-10 mx-auto flex items-center justify-center gap-2"
            >
              <p className="flex items-center text-sm pt-3 font-semibold">
                <MdSend className="text-black" />
                SEND
                {loading && (
                  <span className="spinner-border ml-1 spinner-border-sm"></span>
                )}
              </p>
            </button>
          </div>
        </Form>
      </Formik>
    </SubScribe>
  );
};

const SubScribe = styled.div`
  background-image: url(${bg});
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;

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

export default Subscribe;
