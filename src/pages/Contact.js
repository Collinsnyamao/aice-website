import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../assets/css/contact.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdSend } from "react-icons/md";
import HeroBackground from "../assets/bg.png";
import backImg from "../assets/backG.png";

// import icons
import { MdEmail, MdLocationPin } from "react-icons/md";
import { VscOrganization, VscPerson } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

// IMPORT FORMIK
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { individualThunk } from "../redux/features/individual";
import { organizationThunk } from "../redux/features/organization";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../redux/features/message";

// IMPORT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isActive, setIsActive] = useState(true);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  const notify = () => toast.success("Details sent successfully!");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // individual initialValues
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  // individual initialValues
  const organizationInitialValues = {
    agent_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  // validation schema
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("This field is required!"),
    last_name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    phone_number: Yup.string().required("This field is required!"),
    message: Yup.string().required("This field is required!"),
  });

  // validation schema
  const organizationSchema = Yup.object().shape({
    agent_name: Yup.string().required("This field is required!"),
    company_name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    phone_number: Yup.string().required("This field is required!"),
    message: Yup.string().required("This field is required!"),
  });

  // individual Function
  const handleIndividual = (formValue, helpers) => {
    const { first_name, last_name, email, phone_number, message } = formValue;
    setLoading(true);
    dispatch(
      individualThunk({
        first_name,
        last_name,
        email,
        phone_number,
        message,
      })
    )
      .unwrap()
      .then(() => {
        notify();
        helpers.resetForm();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleOrganization = (formValue, helpers) => {
    const { agent_name, company_name, email, phone_number, message } =
      formValue;
    setLoading(true);
    dispatch(
      organizationThunk({
        agent_name,
        company_name,
        email,
        phone_number,
        message,
      })
    )
      .unwrap()
      .then(() => {
        notify();
        helpers.resetForm();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Navbar active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <ToastContainer />
          <ContactHeader className="mt-24"></ContactHeader>
          <ContactDetails className="contactDetails row g-0">
            <ContactDetailsText className="contactText col-md-5">
              <p className="text-center font-semibold text-xl">Get in touch</p>

              <div className="py-6">
                <p className="font-semibold">Email Address</p>

                <div className="flex gap-4 mt-4">
                  <MdEmail className="text-yellow-500 text-3xl" />
                  <p className="font-semibold mt-1">contact@aiceafrica.com</p>
                </div>
              </div>

              <hr />

              <div className="py-6">
                <p className="font-semibold">Location</p>

                <div className="flex gap-4 mt-4">
                  <MdLocationPin className="text-yellow-500 text-3xl" />
                  <p className="font-semibold mt-1">
                    The Pavilion, Lower Kabete Road - 4th Floor
                  </p>
                </div>
              </div>

              <hr />

              <div className="py-6">
                <p className="font-semibold">Map</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851366847908!2d36.801797674232816!3d-1.2614575355979363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1714b9110b0b%3A0x17888ef192b89803!2sMkungu%20Cl%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1682371740188!5m2!1sen!2ske"
                  width="100%"
                  height="140"
                  title="map"
                  style={{ boarder: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ContactDetailsText>
            <ContactDetailsForm className="contactForm col-md-7">
              <div
                className="flex justify-center items-center h-auto"
                style={{ background: "#F5D537" }}
              >
                <div
                  onClick={handleClick}
                  className={`flex gap-1 items-center justify-center cursor-pointer py-2 w-4/12 hover:bg-white ${
                    isActive ? "bg-white font-bold" : "bg-inherit"
                  }`}
                >
                  <BsPerson className="text-xl" />
                  <p className="pt-3">Individual</p>
                </div>
                <div
                  onClick={handleClick}
                  className={`flex gap-1 items-center justify-center cursor-pointer py-2 mx-3 w-4/12 hover:bg-white ${
                    !isActive ? "bg-white px-3 w-6/12 font-bold" : "bg-inherit"
                  }`}
                >
                  <VscOrganization className="text-xl" />
                  <p className="pt-3">Organization</p>
                </div>
              </div>

              {isActive ? (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleIndividual}
                >
                  <Form>
                    <Individual className="py-12">
                      <div className="p-8 space-y-8">
                        <div className="md:flex grid items-center gap-4">
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="py-2 px-2 h-14 outline-none bg-transparent border-2 border-black w-full"
                                placeholder="First Name"
                                name="first_name"
                              />

                              <div className="bg-blue p-3">
                                <BsPerson className="text-2xl text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="first_name"
                              component="div"
                              className="text-red block"
                            />
                          </div>
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="py-2 px-2 h-14 outline-none bg-transparent border-2 border-black w-full"
                                placeholder="Last Name"
                                name="last_name"
                              />

                              <div className="bg-blue p-3">
                                <BsPerson className="text-2xl text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="last_name"
                              component="div"
                              className="text-red"
                            />
                          </div>
                        </div>

                        <div className="md:flex grid items-center gap-4">
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="w-full py-2 h-14 px-2 outline-none bg-transparent border-2 border-black"
                                placeholder="Email Address"
                                type="email"
                                name="email"
                              />

                              <div className="bg-blue p-3">
                                <MdEmail className="text-2xl text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red"
                            />
                          </div>
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="w-full py-2 px-2 outline-none h-14 bg-transparent border-2 border-black"
                                placeholder="Phone Number"
                                name="phone_number"
                              />

                              <div className="bg-blue p-3">
                                <AiFillPhone className="text-2xl text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="phone_number"
                              component="div"
                              className="text-red"
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <Field
                            className="outline-none border-2 px-2 h-24 bg-transparent w-full"
                            rows={4}
                            placeholder="Your Message"
                            name="message"
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex float-right p-3 uppercase text-xs mb-3"
                          style={{
                            backgroundColor: "#000D20",
                            color: "#F5D537",
                          }}
                        >
                          <div className="flex items-center font-semibold">
                            <MdSend /> Send
                          </div>
                          {loading && (
                            <span className="spinner-border ml-1 spinner-border-sm"></span>
                          )}
                        </button>
                      </div>
                    </Individual>
                  </Form>
                </Formik>
              ) : (
                <Formik
                  initialValues={organizationInitialValues}
                  validationSchema={organizationSchema}
                  onSubmit={handleOrganization}
                >
                  <Form>
                    <Individual className="py-12">
                      <div className="p-8 space-y-8">
                        <div className="md:flex grid items-center gap-4">
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="w-full py-2 px-2 h-14 outline-none bg-transparent border-2 border-black"
                                placeholder="agent name..."
                                type="text"
                                name="agent_name"
                              />

                              <div className="bg-blue p-3">
                                <VscOrganization className="text-2xl text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="agent_name"
                              component="div"
                              className="text-red"
                            />
                          </div>
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="w-full py-2 px-2 h-14 outline-none bg-transparent border-2 border-black"
                                placeholder="company name..."
                                type="text"
                                name="company_name"
                              />
                              <div className="bg-blue p-3">
                                <VscPerson className="text-2xl mr-2 text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="company_name"
                              component="div"
                              className="text-red"
                            />
                          </div>
                        </div>

                        <div className="md:flex grid items-center gap-4">
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center my-2 ">
                              <Field
                                className="w-full py-2 px-2 h-14 outline-none bg-transparent border-2 border-black"
                                placeholder="email..."
                                type="email"
                                name="email"
                              />
                              <div className="bg-blue p-3">
                                <MdEmail className="text-2xl mr-2 text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red"
                            />
                          </div>
                          <div className="md:w-1/2 w-full">
                            <div className="flex items-center">
                              <Field
                                className="w-full py-2 px-2 h-14 outline-none bg-transparent border-2 border-black"
                                placeholder="phone..."
                                type="number"
                                name="phone_number"
                              />
                              <div className="bg-blue p-3">
                                <AiFillPhone className="text-2xl mr-2 text-yellow" />
                              </div>
                            </div>
                            <ErrorMessage
                              name="phone_number"
                              component="div"
                              className="text-red"
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <Field
                            className="outline-none border-2 px-2 w-full h-24 bg-transparent"
                            cols={84}
                            rows={10}
                            placeholder="message..."
                            type="text"
                            name="message"
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex float-right p-3 uppercase text-xs mb-3"
                          style={{
                            backgroundColor: "black",
                            color: "#F5D537",
                            float: "right",
                          }}
                        >
                          <div className="flex align-items-center font-semibold">
                            <MdSend /> Send
                          </div>
                          {loading && (
                            <span className="spinner-border ml-1 spinner-border-sm"></span>
                          )}
                        </button>
                      </div>
                    </Individual>
                  </Form>
                </Formik>
              )}

              <div></div>
            </ContactDetailsForm>
          </ContactDetails>
          <ContactApply className="md:px-20 px-10 py-4">
            <h2 className="text-center font-bold text-white md:text-xl py-6">
              Aspire to be part of the Fourth Industrial Revolution?
            </h2>
            <p className="text-center text-yellow">
              Join us as we equip the continent.
            </p>
            <div className="bg-yellow py-2 text-black mt-4 w-40 mx-auto">
              <div className="dropdown">
                <Link
                  to=""
                  className="dropdown-toggle text-sm no-underline text-black text-center uppercase font-semibold px-12"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="" className="dropdown-item">
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      AI as a Service
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item" href="">
                      Consultation
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item" href="">
                      Contribute
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </ContactApply>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const ContactHeader = styled.header``;

const Individual = styled.div`
  background: url(${backImg});
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
    background-color: #ffffff;
    opacity: 0.9;
    z-index: -1;
  }
`;

const ContactDetails = styled.section`
  display: flex;
  justify-content: center;
  // text-align: center;
`;

const ContactDetailsText = styled.div`
  background: #fff7c9;
  // width: 40%;
  padding: 1.5rem 4rem;
`;

const ContactDetailsForm = styled.div`
  background: #fff;
  // width: 60%;
  // flex: 0.4;
`;

const ContactApply = styled.section`
  background: url(${HeroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  height: auto;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: -1;
  }
`;

export default Contact;
