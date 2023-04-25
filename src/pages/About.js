import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../assets/css/about.css";
import "../assets/css/sass/about/parallelogram.css";
import "../assets/css/sass/about/aboutmiddle.css";
import "../assets/css/sass/about/advisoryboard.css";
import handpoint from "../assets/upcoming.jpg";
import Map from "../assets/world.svg";
import pair from "../assets/pair.svg";
import pair2 from "../assets/pair1.svg";

// ------BOARD PHOTOS--------//
import kate from "../assets/kate.png";
import keneth from "../assets/keneth.jpg";
import kumar from "../assets/kumar.jpeg";
import nick from "../assets/nick.png";
import kamara from '../assets/kamara.jpg'
import hartnell from "../assets/Hartnell.jpeg";
import bendon from "../assets/bendon.jpeg";
import harmen from "../assets/Harmen.jpeg";

// ----------------TEAM PHOTOS--------------- //
import natasha from "../assets/natasha.jpg";
import fancy from "../assets/fancy.JPG";
import joel from "../assets/joel.jpg";
import john from "../assets/john.jpg";
import collins from "../assets/collins.jpg";
import loise from "../assets/loise.JPG";

import bgImage from "../assets/family.png";
import kenya from "../assets/kenya.png";
import aboutImg from "../assets/bg.png";
import finger from "../assets/finger.png";
import { AiFillLinkedin } from "react-icons/ai";

const advisory = [
  {
    name: "Amit Kumar Pandey",
    image: `${kumar}`,
    title: "CTO",
    space: "Hanson Robotics",
    linkedin: "https://www.linkedin.com/in/amitkrpandey/",
  },
  {
    name: "Kate Hallot",
    image: `${kate}`,
    title: "	Head of Global Developer Relations & Emerging Areas",
    space: "NVIDIA",
    linkedin: "https://www.linkedin.com/in/kathleen-kallot/",
  },
  {
    name: "Hartnell Ngugi",
    image: `${hartnell}`,
    title: "Chief Data Officer",
    space: "ABSA Bank Kenya PLC ",
    linkedin: "https://www.linkedin.com/in/hartnellndungi/",
  },
  {
    name: "Dr. Nick Bradshaw",
    image: `${nick}`,
    title: "Founder & CEO",
    space: "Cortex Logic ",
    linkedin: "https://www.linkedin.com/in/jacquesludik/",
  },
  {
    name: "Bendon Murgor",
    image: `${bendon}`,
    title: "Co-Founder & Chief Technology Officer",
    space: "Adanian Labs ",
    linkedin: "https://www.linkedin.com/in/bendonmurgor/",
  },
  {
    name: "Dr. Kenneth Namunje",
    image: `${keneth}`,
    title: "Chairperson ",
    space: "Kipeto Energy",
    linkedin: "https://www.crunchbase.com/person/kenneth-namunje",
  },
  {
    name: "Harmen Brenninkmeijer",
    image: `${harmen}`,
    title: "Tech Lead",
    space: "Hanson Robotics",
    linkedin: "https://www.linkedin.com/in/amitkrpandey/",
  },
  // {
  //   name: "Larry Medsker",
  //   image: `${board}`,
  //   title: "Tech Lead",
  //   space: "Hanson Robotics",
  //   linkedin: "https://www.linkedin.com/in/amitkrpandey/",
  // },
];

const team = [
  {
    name: "John Kamara",
    image: `${kamara}`,
    title: "Founder & Chief Inspiration Officer",
  },
  {
    name: "Natasha Ochiel",
    image: `${natasha}`,
    title: "Co-Founder & Head of Business",
  },
  {
    name: "Fancy Chepkoech",
    image: `${fancy}`,
    title: "Tech Lead",
  },
  {
    name: "Joel Osebe",
    image: `${joel}`,
    title: "Lead Data Scientist",
  },
  {
    name: "Loise Mwarangu",
    image: `${loise}`,
    title: "Data Scientist",
  },
  {
    name: "Collins Nyamao",
    image: `${collins}`,
    title: "Developer",
  },
  {
    name: "John Wafula",
    image: `${john}`,
    title: "Data Scientist",
  },
];

function About() {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navbar active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <section className="mt-16 md:flex">
            <div className="md:w-1/2 w-full">
              <AboutSectionText className="py-12 sm:px-12 px-4">
                <h2 className="text-center">ABOUT US</h2>
                <p className="text-sm mb-6 my-4 leading-8">
                  Founded in 2020, the AI Centre of Excellence is passionate
                  about
                  <span className="aboutSpecial">
                    {" "}
                    creating value and sustainable impact
                  </span>{" "}
                  within the African Intelligence and Machine Learning space by
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center border_bottom">
                    <div className="bg-gray-200 font-extrabold px-4 py-2 text-black text-center parallelogram">
                      1
                    </div>
                    <p className="text-xs my-0">
                      Transforming Data Scientists & Software engineers into AI
                      and ML Engineers.
                    </p>
                  </div>
                  <div className=" flex gap-4 items-center border_bottom">
                    <div className="bg-gray-200 font-extrabold px-4 py-2 text-black parallelogram">
                      2
                    </div>
                    <p className="text-xs my-0">
                      Creating sustainable impact through Research and
                      Development
                    </p>
                  </div>
                  <div className="flex gap-4 items-center border_bottom">
                    <div className="bg-gray-200 font-extrabold px-4 py-2 text-black flex items-center justify-center parallelogram">
                      3
                    </div>
                    <p className="text-xs my-0">
                      Providing custom AI as a Service and building AI
                      solutions.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-8">
                  From challenges to solutions, the AI Centre of excellence aims
                  to develop impact within the AI space that allows for growth,
                  innovation and creativity.
                </p>
              </AboutSectionText>
            </div>
            <div className="md:w-1/2 w-full">
              <img className="h-full object-cover" src={finger} alt="" />
              {/* <AboutSectionImage className="md:block hidden"></AboutSectionImage> */}
            </div>
          </section>

          <MiddleSection>
            <AboutProposition className="sm:px-20 px-4 py-10">
              <h2 className="text-center md:text-4xl uppercase font-semibold mb-4">
                What sets us apart
              </h2>
              <div className="space-y-8">
                <div className="d-flex">
                  <div className="border_left"></div>
                  <div className="p-4 flex w-full gap-x-6 items-center propositionItem">
                    <div className="md:w-2/12">
                      <p className="text-2xl transform">
                        &lt; Transformation &gt;
                      </p>
                    </div>
                    <p className="w-10/12">building a skilled community of AI engineers & leader</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="border_middle"></div>
                  <div className="p-4 flex gap-x-6 items-center border-1 border-yellow w-full propositionItem">
                    <div className="md:w-2/12">
                      <p className="font-bold text-yellow">
                        &lt; Real Value &gt;
                      </p>
                    </div>
                    <p className="w-10/12">Across Africa and globally</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="border_left"></div>
                  <div className="p-4 flex gap-x-6 items-center propositionItem">
                    <div className="md:w-2/12">
                      <p className="text-2xl africa">&lt; Africa &gt;</p>
                    </div>
                    <p className="w-10/12">Where our journey of sustainable impact begins.</p>
                  </div>
                </div>
              </div>
            </AboutProposition>

            <AboutAICE>
              <h2 className="text-center uppercase">
                What AICE Offers (as an accelerator)
              </h2>

              <div className="gap-8 my-12 offer sm:px-20 px-4">
                <div className="md:flex grid px-4 gap-8">
                  <div className="md:w-1/2 w-full">
                    <div className="">
                      <p className="leading-8 text-sm">
                        There are <span className="middleSpecial">36,524</span>{" "}
                        AI experts in the world.{" "}
                        <span className="middleSpecial">50%</span> of the
                        experts are in the USA while{" "}
                        <span className="middleSpecial">
                          less than 5% are in Africa
                        </span>{" "}
                        (according to oxford insights on government artificial
                        intelligence readiness index 2019).
                      </p>
                      <p className="leading-8 text-sm">
                        <span className="middleSpecial">
                          Kenya ranks as the first in Africa
                        </span>
                        .AICE aims to leverage on this potential and transform
                        kenya into one of many full blown Artificial
                        Intelligence Centres of Excellence.
                      </p>
                      <p className="leading-8 text-sm">
                        AICE aims to leverage on the potential for Africa and
                        transform it into an AI hub. Placing Africa on the World
                        map for AI;
                      </p>
                    </div>
                    <div className="flex justify-end py-4">
                      <div className="space-y-4">
                        <img className="md:w-1/2 w-full" src={kenya} alt="" />
                        <p className="text-xs uppercase">
                          Africa Ranking of the penetration of artificial
                          Intelligence
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="py-4 relative">
                      <AboutAICEImage
                        className=""
                        src={Map}
                        alt="continent image"
                      />
                      <img
                        className="absolute md:top-40 top-20 md:left-0 -left-12"
                        src={pair}
                        alt=""
                      />
                      <span className="absolute md:top-80 top-60 md:-left-12 -left-8 md:text-sm text-xs text-yellow uppercase text-center">
                        United States <br /> of America <br />{" "}
                        <span className="font-bold text-xl">50%</span>
                      </span>
                      <img
                        className="absolute md:top-48 top-28 md:left-80 left-40"
                        src={pair2}
                        alt=""
                      />
                      <span className="absolute md:top-80 top-60 md:left-80 left-48 text-sm text-yellow uppercase text-center my-2">
                        Africa <br /> <span className="text-xs">less than</span>{" "}
                        <span className="font-bold text-xl">5%</span>
                      </span>
                    </div>

                    <div className="relative border-2 border-yellow h-20 p-2 md:w-5/12 w-8/12 mx-auto md:my-24 mt-48 mb-12">
                      <div className="absolute border-brown h-20 text-center p-4 w-full bg-brown flex flex-col justify-center items-center text-black">
                        <span className="uppercase text-xs text-yellow font-semibold">
                          Total AI experts worldwide
                        </span>
                        <span className="text-sm font-bold">36524</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AboutAICE>
          </MiddleSection>

          {/* <Team className="py-12"> */}
          <section className="sm:px-12 px-2 py-4">
            <h2 className="text-center text-4xl font-bold uppercase">
              Our Team
            </h2>

            <div className="team__section">
              {team.map((person, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    style={{ maxWidth: "200px" }}
                    className="h-60 object-cover"
                    src={person.image}
                    alt="icon image"
                  />
                  <div className="bg-blue h-20 w-full pt-1">
                    <p className="text-center text-white font-semibold">
                      {person.name}
                    </p>
                    <p className="text-xs text-center pb-2">
                      <span className="" style={{ color: "#5BF8FD" }}>
                        {person.title}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* </Team> */}

          <AdvisoryBoardWrapper className="sm:px-12 px-10 py-8">
            <h2 className="text-yellow text-center fw-semi-bold md:text-4xl mb-4 text-uppercase">
              Advisory Board
            </h2>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
              {advisory.map((board, index) => (
                <div className="p-1 mx-auto" key={index}>
                  <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <div className="bg-gray rounded">
                      <img
                        className="duration-700 w-52 h-60 object-cover transition-transform"
                        src={board.image}
                        alt=""
                      />
                    </div>
                    <div className="bg-white font-semibold py-3 w-52 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-2 text-center translate-y-[80%] group-hover:translate-y-[0%] transition-all">
                      <p className="text-black font-semibold text-sm mb-4">
                        {board.name}
                      </p>
                      <div className="">
                        <p className="text-black text-xs">{board.title}</p>
                        <small className="text-black text-xs">
                          {board.space}
                        </small>
                        <a
                          target="_blank"
                          className="flex items-center justify-center my-4"
                          href={`${board.linkedin}`}
                        >
                          <AiFillLinkedin className="text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AdvisoryBoardWrapper>

          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const Team = styled.div`
  background: url(${bgImage});
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
    z-index: -1;
  }
`;

const AboutSectionText = styled.div`
  background: url(${aboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
  height: auto;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;
    z-index: -1;
  }
`;

const AboutSectionImage = styled.div`
  background: url(${handpoint});
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  width: 80%;
`;

const MiddleSection = styled.div`
  background: url(${aboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
  height: auto;

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
  }
`;

const AboutProposition = styled.section`
  color: #fff;
`;

const AboutAICE = styled.section`
  color: #fff;
`;

const AboutAICEImage = styled.img`
  width: 600px;
`;

const OurTeamText = styled.div`
  background: #10142d;
  color: #fff;
  padding: 1rem 0.2rem;
  width: 100%;
`;

const AdvisoryBoardWrapper = styled.section`
  background: url(${aboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
  height: auto;

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
  }
`;

export default About;
