import React, { useState } from "react";
import styled from "styled-components";
import "../assets/css/knowledge.css";
import "../assets/css/sass/knowledge/knowledgetop.css";
import "../assets/css/sass/knowledge/overlap.css";
import handpoint from "../assets/aboutpoint.jpg";
import backImg from "../assets/bg.png";
import leftImg from "../assets/leftImg.png";
import knowledge from "../assets/knowledge.svg";
import family from "../assets/family.png";
import { FaLocationArrow } from "react-icons/fa";
import EngineersModal from "./EngineersModal";
import { MdSend } from "react-icons/md";

// import components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function KnowledgeCenter() {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navbar active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <Knowledge className="py-12 mt-24 px-4">
            <h2 className="md:text-3xl font-bold text-center uppercase">
              Knowledge Center
            </h2>
            <p className="md:text-xl my-4 leading-10 text-center">
              The AI Centre of Excellence
              <span className="text-yellow font-bold"> develops</span> and{" "}
              <span className="text-yellow font-bold">runs programs</span> that{" "}
              <span className="text-yellow font-bold">impact knowledge</span> across the
              AI ecosystem. The programs are designed for different niches, true
              to what AICE aims to accomplish for AI Africa.
            </p>
          </Knowledge>
          <section className="md:flex grid -mb-10">
            <AIEngineersWrapper className="md:w-1/2 w-full md:h-[105vh] h-[40vh]">
              <div className="relative md:top-80 top-20 md:right-60 right-0 float-right md:mr-24 mr-8 border-2 border-yellow h-32 md:w-5/12 w-10/12">
                <div className="absolute h-32 p-4 w-full top-4 right-4 bg-blue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex flex-col items-center justify-center">
                  <span className="font-semibold text-white text-center">
                    Increase In demand for AI experts
                  </span>
                  <div className="flex items-center gap-4 my-2">
                    <img className="w-12" src={knowledge} alt="" />
                    <span className="text-yellow text-2xl font-semibold">
                      74%
                    </span>
                  </div>
                </div>
              </div>
            </AIEngineersWrapper>
            <AIEngineersText className="px-4 text-white md:w-1/2 w-full h-screen">
              <h2 className="md:text-4xl text-2xl text-center uppercase my-4">
                AI <span className="blue--text">Engineers</span> Training
              </h2>
              <p className="leading-8 text-sm">
                AI Centre of Excellence provides training to produce highly
                trained expert AI and ML Engineers aimed at meeting the growing
                demand for AI engineers in Africa and globally. This is through
                the <span className="blue--text">intensive training</span> done
                by seasoned AI and ML Engineers. AI is one of the fastest
                growing technologies with an increase in demand from AI/ML
                experts.{" "}
                <span className="blue--text">Demand for AI experts</span> has
                increased by 74% over the past 4 years.Through our partners, we
                are able to ensure our training is focused on{" "}
                <span className="blue--text">
                  providing solutions to real world challenges.
                </span>
              </p>

              <div className="relative float-right md:mr-24 mr-12 border-2 border-bluish h-32 p-3 md:w-5/12 w-10/12">
                <div className="absolute border h-32 p-4 w-full bg-purple text-black text-center flex flex-col justify-center items-center">
                  <p className="font-extrabold uppercase">
                    Grow your skills with us
                  </p>
                  <EngineersModal />
                </div>
              </div>
            </AIEngineersText>
          </section>

          <AILeadersSection>
            <div className="py-8 px-4">
              <h2
                className="text-center md:text-3xl text-2xl my-4 text-uppercase"
                style={{ marginBottom: "-20vh" }}
              >
                Artificial Intelligence for{" "}
                <span className="yellow--text">Leaders</span> Program
              </h2>
              <div className="md:flex gap-12 items-center grid">
                <div className="md:w-1/2 w-full">
                  <p className="m-4 md:font-bold">
                    Training is for Leaders who want to:
                  </p>
                  <ul className="font-thin space-y-4">
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="py-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        1
                      </div>
                      <div className="px-2 text-xs trainingItem ml-4">
                        Understand AI to be able to make important choices and
                        decisions for their organisation
                      </div>
                    </li>
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="py-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        2
                      </div>
                      <div className="px-2 text-xs trainingItem">
                        Develop the ability to identify scope and manage
                        projects in AI
                      </div>
                    </li>
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="py-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        3
                      </div>

                      <div className="text-xs px-2 trainingItem">
                        Deliver transformative projects to external and internal
                        clients and stakeholders
                      </div>
                    </li>
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="py-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        4
                      </div>

                      <div className="text-xs px-2 trainingItem">
                        Manage technical teams through the lifecycle of AI
                        projects
                      </div>
                    </li>
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="py-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        5
                      </div>

                      <div className="text-xs px-2 trainingItem">
                        Make appropriate choices for their business when relates
                        to smart technologies
                      </div>
                    </li>
                    <li className="flex items-center border-b-4 border-yellow-400 knowledge_border">
                      <div className="p-3 bg-yellow w-14 h-12 flex items-center justify-center text-center text-black font-bold parallelogram">
                        6
                      </div>

                      <div className="text-xs px-2 trainingItem">
                        Lead organizations as they develop AI-enabled products
                        and services that allow for them to meet their business
                        goals
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 w-full mx-auto">
                  <div className="font-thin leading-10 my-4 trainingInfo">
                    The AI for Leaders Program is built to{" "}
                    <span className="text-yellow">equip leaders</span> with the
                    <span className="text-yellow">knowledge</span> and{" "}
                    <span className="text-yellow">
                      opportunity to leverage off AI
                    </span>{" "}
                    within their organizations. With an understanding that every
                    business is different, the{" "}
                    <span className="text-yellow">core aim</span> is to
                    <span className="text-yellow">
                      {" "}
                      allow businesses to flourish using AI
                    </span>
                    , while tailor making aspects of the program to meet their
                    current and future needs.
                  </div>

                  <div className="relative border-2 border-yellow h-36 p-4 md:w-7/12 w-10/12 mb-20">
                    <div className="absolute border-brown h-36 text-center p-4 w-full bg-brown flex flex-col justify-center items-center text-black">
                      <p className="font-bold uppercase text-xl">
                        Grow your business by leveraging in ai
                      </p>
                      <button className="flex items-center text-sm uppercase font-semibold bg-yellow p-2">
                        <MdSend className="text-xl" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AILeadersSection>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const Knowledge = styled.div`
  background: url(${family});
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
    background: black;
    opacity: 0.1;
    z-index: -1;
  }
`;

const KnowledgeHeader = styled.header`
  background: #10142d;
  height: 50vh;
`;

const AIEngineersWrapper = styled.div`
  background: url(${leftImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AIEngineersText = styled.div`
background: url(${backImg});
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
  background: black;
  opacity: 0.7;
  z-index: -1;
`;

const AILeadersSection = styled.section`
background: url(${backImg});
background-repeat: no-repeat;
background-size: cover;
background-position: top center;
position: relative;
z-index: 0;
height: auto;
color: white;

&::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: -1;
`;

export default KnowledgeCenter;
