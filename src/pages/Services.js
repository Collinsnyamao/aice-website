import React, { useState } from "react";
import styled from "styled-components";
import "../assets/css/services.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import WelcomeImage from "../assets/welcomeImage.png";
import HeroBackground from "../assets/bg.png";
import hand from "../assets/hand.png";
import { FaTools } from "react-icons/fa";
import ServiceModal from "./ServiceModal";
import DataCleaning from "../assets/DataCleaning.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";
import Icon7 from "../assets/Icon7.svg";
import Icon8 from "../assets/Icon8.svg";
import Icon9 from "../assets/Icon9.svg";

const services = [
  {
    title: "Data Cleaning",
    img: `${DataCleaning}`,
  },
  {
    title: "Data Analysis",
    img: `${Icon2}`,
  },
  {
    title: "Neural Networks",
    img: `${Icon3}`,
  },
  {
    title: "Computer Vision",
    img: `${Icon4}`,
  },
  {
    title: "Insights & Reporting",
    img: `${Icon7}`,
  },
  {
    title: "Machine Learning Models",
    img: `${Icon8}`,
  },
  {
    title: "Natural Language Processing",
    img: `${Icon9}`,
  },
];

function Services() {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navbar active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <section className="md:flex grid mt-24 md:h-screen h-auto">
            <ServiceBackground className="md:w-5/12 w-full relative md:h-[80vh] h-[20vh]">
              <div className="absolute h-32 w-56 bottom-0 right-0 bg-blue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex flex-col items-center justify-center">
                <p className="text-white font-semibold">Companies using AI</p>
                <p className="text-yellow font-bold text-2xl">50%</p>
              </div>
            </ServiceBackground>
            <ServicesTextSection className="md:w-7/12 w-full px-4 py-8">
              <h2 className="text-center md:text-3xl md:font-semibold uppercase">
                Artificial Intelligence <br /> as a Service
              </h2>

              <p className="leading-8 my-4 mt-10 text-sm">
                From a survey by McKinsey,{" "}
                <span className="text-yellow">
                  50% of companies are using AI
                </span>{" "}
                at least at a functional level, a number that is assumed to
                drastically drop by Africa
              </p>
              <p className="leading-8 my-4 text-sm">
                AI has proven that his data an be put to use to increase
                business' profit margins and generate revenue.
              </p>

              <p className="leading-8 my-4 text-sm">
                AI centre of excellence offers{" "}
                <span className="text-yellow">customized</span> and{" "}
                <span className="text-yellow">
                  industry tailored AI services
                </span>
                . The Centre aims to support companies in their use of AI, not
                just at a functional level, but to
                <span className="text-yellow">
                  drive ROI make better decisions
                </span>{" "}
                as well as to{" "}
                <span className="text-yellow">
                  drive their goals for the business and use AI transformatively
                </span>
                .
              </p>
              <p className="text-sm leading-8">
                We improve business’ products and customer experiences, increase
                data-driven decision making, automate time-consuming tasks and
                develop AI tools for prediction, recommendation and operational
                efficiency.
              </p>
            </ServicesTextSection>
          </section>

          <Adanian className="py-8 px-4">
            <section className="my-8">
              <div className="text-center" style={{ color: "#000D20" }}>
                <h1 className="uppercase font-semibold">
                  Adanian Labs Ai Partner
                </h1>
                <p className="">
                  AI Centre of Excellence works to ensure all products within
                  Adanian Labs are AI and or data driven by offering
                  consultation services or AIaaS.
                </p>
                <br />
                <h3 className="uppercase font-semibold">
                  AI DIAGNOSTIC TOOL (Ai.MScore)
                </h3>
                <p>
                  The first step to our custom AI solutions. Tools, advice and
                  recommendations based on your specific needs.
                </p>
                <p className="px-8 text-center leading-8">
                  An AI driven organization assessment tool to measure AI
                  maturity levels, while giving recommendations to achieve
                  better outcomes and AIaaS to companies, while assessing all
                  dimensions of AI maturity.
                </p>
                <button
                  className="uppercase text-sm font-semibold p-2"
                  style={{ background: "#5BF8FD" }}
                >
                  <a target="_blank" href="http://163.172.137.54:2222/" className="flex no-underline text-black align-items-center justify-content-between">
                    <FaTools className="m-2" />
                    diagnose
                  </a>
                </button>
              </div>
            </section>
          </Adanian>

          <ServicesSection className="py-8">
            <h2 className="text-center md:text-4xl md:font-semibold uppercase mb-8">
              Our Services
            </h2>

            <p className="text-center text-xl mb-4">
              AI Center of excellence is outsourced by organizations to provide
              disruptive AI solutions.
            </p>

            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-2 gy-5 sm:px-5 px-4 py-4">
              {services.map((service, index) => (
                <div style={{maxWidth:'200px'}} className="border-1 border-bluish md:h-40 h-auto my-3" key={index}>
                  <div className="flex items-center justify-center flex-col space-y-4 px-2 py-3">
                    <img className="w-16" src={service.img} alt="icon" />
                    <p className="md:font-semibold text-center">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center z-50">
              <ServiceModal />
            </div>
          </ServicesSection>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const ServicesImageSection = styled.div`
  background: url("https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  width: 120%;
`;

const Adanian = styled.div`
  background: url(${hand});
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
    background-color: #ffffff;
    opacity: 0.7;
    z-index: -1;
  }
`;

const ServiceBackground = styled.div`
  background: url(${HeroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
`;

const ServicesTextSection = styled.div`
  background: url(${HeroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #001123;
    opacity: 0.7;
    z-index: -1;
  }
  font-weight: 300;
  color: #fff;
`;

const ServicesSection = styled.section`
  background: url(${HeroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index 0;

  &::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #001123;
    opacity: 0.8;
    z-index: -1;
  }
  color: #fff;
`;

export default Services;
