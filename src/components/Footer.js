import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

import Facebook from "../assets/social.svg";
import Instagram from "../assets/social1.svg";
import Twitter from "../assets/social2.svg";
import LinkedIn from "../assets/social3.svg";
import Email from "../assets/email.png";
import FinalAICELogo from "../assets/Final-AICELogo.png";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../redux/features/message";
import { subscribe } from "../redux/features/subscribe";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const notify = () => toast.success("Subscription sent successfully!");

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
  });

  const handleSubscribe = (formValue, helpers) => {
    const { email } = formValue;
    setLoading(true);
    dispatch(subscribe({ email }))
      .unwrap()
      .then((res) => {
        notify();
        helpers.resetForm();
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <FooterWrapper className="py-8 md:px-20 px-8 footerBackground">
        <ToastContainer />
        <div className="md:flex grid justify-between items-center sm:grid-cols-4 grid-cols-1 gap-4">
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <img src={FinalAICELogo} alt="AICE Logo" />
            <div>
              <p className="text-sm my-4 font-normal">
                Follow us on our socials
              </p>
              <div className="flex gap-4 icons">
                <a target="_blank" href="https://www.google.com/url?q=https://www.facebook.com/AICE-111784500725723/?_rdc%3D1%26_rdr&sa=D&source=editors&ust=1682068361484509&usg=AOvVaw3-jQFN0wktQa_9YEqFnJTM">
                  <img className="w-9" src={Instagram} alt="Instagram" />
                </a>
                <a target="_blank" href="https://www.google.com/url?q=https://twitter.com/AfricaAice&sa=D&source=editors&ust=1682068361484809&usg=AOvVaw0qZGggS7F_CsJ5NfNZFxxW">
                  <img className="w-9" src={LinkedIn} alt="Twitter" />
                </a>
                <a target="_blank" href="https://www.google.com/url?q=https://www.linkedin.com/company/ai-centre-of-excellence/&sa=D&source=editors&ust=1682068361485000&usg=AOvVaw2POlhy_wYtIrw0EylTLefI">
                  <img className="w-9" src={Twitter} alt="LinkedIn" />
                </a>
                <a target="_blank" href="https://www.instagram.com/aice_africa/">
                  <img className="w-9" src={Facebook} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-8 my-4 flex flex-col items-center sm:items-start">
            <div className="font-thin text-sm">
              <Link
                to="/knowledge-center"
                className="text-sm text-white no-underline font-normal"
              >
                Knowledge Centre
              </Link>
            </div>
            <div className="font-thin text-sm">
              <Link
                to="/services"
                className="text-sm text-white no-underline font-normal"
              >
                AI Services
              </Link>
            </div>
            <div className="font-thin text-sm">
              <Link
                to="/research-development"
                className="text-sm text-white no-underline font-normal"
              >
                Research & Development
              </Link>
            </div>
          </div>
          {/* <div className="space-y-4">
            <Link
              to="/resources"
              className="font-thin text-sm gallery text-white block no-underline font-normal"
            >
              Resources
            </Link>
            <Link
              to="/gallery"
              className="font-thin text-sm gallery text-white block no-underline font-normal"
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className="font-thin text-white block no-underline text-sm news font-normal"
            >
              Blog
            </Link>
            <Link
              to="/events"
              className="font-thin text-sm events text-white block no-underline font-normal"
            >
              Events
            </Link>
          </div> */}
          <div className="space-y-6">
            <p className="font-bold text-2xl stay">Stay with us</p>
            <p className="text-sm font-normal">
              Spam free insight directly to your inbox
            </p>
            {/* <div className="border-1 border-yellow flex items-center py-2 w-80 h-12 gap-1 footerForm">
              <img
                className="w-5 mt-1 h-auto messageIcon m-2"
                src={Email}
                alt="mail icon"
              />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
              >
                <Form
                 className="md:flex items-center grid"
                >
                  <Field
                    type="email"
                    name="email"
                    className="outline-none border-none font-normal bg-transparent"
                    placeholder="Email Address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-yellow text-xs"
                  />
                  <button
                    type="submit"
                    className="flex items-center w-12/12 bg-yellow text-black py-2 px-3 h-12 font-semibold"
                  >
                    Subscribe
                    {loading && (
                  <span className="spinner-border ml-1 spinner-border-sm"></span>
                )}
                  </button>
                </Form>
              </Formik>
            </div> */}
            <div className="w-11/12 mx-auto">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
              >
                <Form className="">
                  <div className="flex items-center">
                    <Field
                      type="email"
                      name="email"
                      className="border-2 border-yellow p-2 h-12 outline-none font-normal bg-transparent"
                      placeholder="Email Adress..."
                    />
                    <button
                      type="submit"
                      className="flex items-center w-12/12 bg-yellow text-black py-2 h-12 px-3 font-semibold"
                    >
                      Subscribe
                      {loading && (
                        <span className="spinner-border ml-1 spinner-border-sm"></span>
                      )}
                    </button>
                    {/* <ErrorMessage
                      name="email"
                      component="div"
                      className="text-yellow text-xs"
                    /> */}
                  </div>
                  <div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-yellow text-xs"
                    />
                    {/* <button
                      type="submit"
                      className="flex items-center w-12/12 bg-yellow text-black py-2 h-12 px-3 font-semibold"
                    >
                      Subscribe
                      {loading && (
                        <span className="spinner-border ml-1 spinner-border-sm"></span>
                      )}
                    </button> */}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </FooterWrapper>
      <SubFooter className="bg-cyan-900 text-white text-sm flex md:justify-between justify-center gap-80 py-4 md:px-20 px-16">
        <p>&#169; AICE Africa 2022 All rights reserved</p>
        <p className="md:block hidden">Terms & Conditions | Privacy Policy</p>
      </SubFooter>
    </div>
  );
}

const FooterWrapper = styled.footer`
  background: #10142d;
  color: white;
`;

const SubFooter = styled.footer`
  background: #0b0d1e;
`;

export default Footer;
