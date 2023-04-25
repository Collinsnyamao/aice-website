import React, { useState } from "react";
import styled from "styled-components";
import "../assets/css/home.css";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import WelcomeImage from "../assets/welcomeImage.png";
import ContinentMap from "../assets/mapOfContinent.png";
import ResearchImage from "../assets/research.png";
import ServicesAI from "../assets/services-ai.png";
import ContributeBackground from "../assets/Group-182.svg";
import ContributeFunding from "../assets/contributeFunding.png";
import ContributeSponsor from "../assets/contributeSponsor.png";
import ContributeCases from "../assets/contributeCases.png";

// --------TESTIMONIAL IMAGES----------//
import gibson from "../assets/gibson.jpeg";
import jeff from "../assets/jeff.jpeg";
import joy from "../assets/joy.jpeg";
import warui from "../assets/warui.jpeg";
import zuhudi from "../assets/zuhudi.jpg";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import TestiMonialsDetails from "../components/TestimonialDetail";
import { testimonials } from "../components/Testimonials";
import image from "../assets/services.png";

// import components
import Footer from "../components/Footer";
import AiceLandinVideo from "../assets/aice-landing-video.mp4";
import HomeNav from "../components/HomeNav";

// PARTNER LOGO
import parallel from "../assets/parallel.png";
import zindi from "../assets/zindi_white.png";
import usiu from "../assets/usiu-logo.png";
import miia from "../assets/MIIA.png";
import huawei from "../assets/huawei-white.png";
import ahura from "../assets/ahura.png";
import adanian from "../assets/adanian.png";
import contrLeft from "../assets/final.png";
import famImg from "../assets/family.png";
import welcomeImg from "../assets/welcomeImg.png";
import { Link } from "react-router-dom";
import serviceLeft from "../assets/arrowBL.png";
import serviceRight from "../assets/arrowBR.png";

function Home() {
  const [activeItem, setActiveItem] = useState(0);

  const handleTranslated = (event) => {
    // Get the index of the center item
    const centerIndex = event.item.index;

    // Update the active item
    setActiveItem(centerIndex);
  };

  const testimonials = {
    loop: true,
    margin: 0,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
      0: {
        items: 1,
        center: true,
        dots: false,
        nav: true,
      },
      480: {
        items: 1,
        center: false,
        dots: false,
      },
      769: {
        items: 3,
      },
    },
  };
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav: true,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    navText: [
      '<i class="bi bi-caret-left-fill"></i>',
      '<i class="bi bi-caret-right-fill"></i>',
    ],
  };

  const partners = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  const contribute = {
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        // dots: true,
        nav: true,
        navText: [
          `<img style="width: 40px; height: 40px; transform: rotate(180deg)" src=${contrLeft} alt="images" />`,
          `<img src=${contrLeft} alt="images" style="width: 40px; height: 40px;" />`,
        ],
      },
      480: {
        items: 1,
        center: false,
        nav: true,
      },
      769: {
        items: 3,
        center: true,
        nav: true,
      },
    },
    navText: [
      `<img style="width: 70px; height: 70px;transform: rotate(180deg)" src=${contrLeft} alt="images" />`,
      `<img src=${contrLeft} alt="images" style="width: 70px; height: 70px;" />`,
    ],
  };

  const services = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        navText: [
          `<img style="width: 34px; height: 34px;" src=${serviceRight} alt="images" />`,
          `<img style="width: 34px; height: 34px;" src=${serviceLeft} alt="images" />`,
        ],
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    navText: [
      `<img style="width: 70px; height: 70px;" src=${serviceRight} alt="images" />`,
      `<img style="width: 70px; height: 70px;" src=${serviceLeft} alt="images" />`,
    ],
  };

  const partnerLogos = [
    `${parallel}`,
    `${zindi}`,
    `${usiu}`,
    `${miia}`,
    `${huawei}`,
    `${ahura}`,
    `${adanian}`,
  ];

  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <HomeNav active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <div className="">
            <video
              id="background-video"
              className="bg--home--background"
              autoPlay
              loop
              muted
              height="700"
            >
              <source src={AiceLandinVideo} type="video/mp4" />
              Your browser does not support the video format.
            </video>
          </div>

          <div className="absolute bottom-20 md:mb-0 md:px-20 px-4">
            <p className="text-white md:text-xl text-xs md:leading-10 leading-6">
              We are commercially viable, sustainable, impact led and outcome
              driven; with fearless conviction for change using data and AI for
              good. Insanely crazy for innovation that will create jobs and
              drive human wealth.
            </p>
            <p className="text-white md:text-2xl text-xs">John Kamara</p>
          </div>

          <Diagnosis className="py-12 px-4 sm:h-[60vh] h-auto space-y-10">
            <p className="text-center md:text-5xl text-4xl font-thin">
              Welcome to <span className="font-bold">AICE</span>
            </p>
            <div className="flex justify-center items-center my-8">
              <div className="flex items-center md:-mr-10 -mr-6 md:px-8 px-2 rounded py-2 md:text-2xl text-sm uppercase">
                <Link
                  className="no-underline text-black hover:scale-105 duration-700"
                  to="/research-development"
                >
                  <p className="bg-yellow px-2 py-2 rounded-tl-2xl">
                    Diagnosis
                  </p>
                </Link>
                <img className="md:w-24 w-12 z-40" src={welcomeImg} alt="" />
              </div>
              <div className="md:w-4/12 w-3/12">
                <img className="" src={WelcomeImage} alt="images" />
              </div>
              <div className="flex items-center md:text-2xl -ml-6 md:-ml-8 text-sm uppercase">
                <img
                  className="md:w-24 w-12 rotate-180"
                  src={welcomeImg}
                  alt=""
                />
                <Link
                  className="no-underline text-black hover:scale-105 duration-700"
                  to="/contact"
                >
                  <p className="bg-yellow px-2 py-2 rounded-tr-2xl">Reach Us</p>
                </Link>
              </div>
            </div>
          </Diagnosis>

          <ServiceWrapper
            // style={{ maxHeight: "100vh" }}
            className="sm:px-24 px-4 z-[-50] py-8"
          >
            <div className="">
              <h3 className="text-white text-center md:text-4xl text-3xl uppercase mb-4">
                OUR FOCUS AREAS
              </h3>

              <p className="text-white text-center font-normal mb-4">
                The AI Center of Excellence is passionate about creating value
                and long term impact within the AI and ML space
              </p>

              <OwlCarousel {...services}>
                <div className="w-8/12 mx-auto py-8 homeServices md:h-[68vh] h-[50] homeService">
                  <h4
                    className="text-sky-400 md:text-4xl text-2xl uppercase mt-2 training"
                    style={{ fontWeight: "300", color: "#5BF8FD" }}
                  >
                    Training
                  </h4>
                  <div className="underline"></div>
                  <p className="text-sky-400 my-2" style={{ color: "#F5D537" }}>
                    &#60;Knowledge Center&#62;
                  </p>
                  <p className="text-white my-4" style={{ fontSize: "13px" }}>
                    &#60;We create value through capacity building and business
                    innovations on AI and ML through our various AI programs for
                    individuals and businesses{" "}
                    <Link
                      className="text-yellow no-underline"
                      to="/knowledge-center"
                    >
                      Read More..
                    </Link>
                    &#62;
                  </p>
                  <MapImage
                    className="max-w-[500px] mx-auto"
                    src={ContinentMap}
                    alt="Continent image"
                  ></MapImage>
                </div>

                <div className="w-8/12 py-8 mx-auto homeServices md:h-[68vh] h-[50] homeService">
                  <h4
                    className="text-sky-400 md:text-4xl text-2xl uppercase mt-2 training"
                    style={{ fontWeight: "300", color: "#5BF8FD" }}
                  >
                    Research
                  </h4>
                  <div className="underline"></div>
                  <p className="text-sky-400 my-2" style={{ color: "#F5D537" }}>
                    &#60;Research and Development&#62;
                  </p>
                  <p className="text-white my-4" style={{ fontSize: "13px" }}>
                    &#60;We drive AI Research -both internal and collaborative-
                    to curate and develop solutions with relevant and
                    exponential impact{" "}
                    <Link
                      className="text-yellow no-underline"
                      to="/research-development"
                    >
                      Read More..
                    </Link>
                    &#62;
                  </p>
                  <MapImage
                    className="max-w-[500px] mx-auto"
                    src={ResearchImage}
                    alt="Continent image"
                  ></MapImage>
                </div>

                <div className="w-8/12 py-8 mx-auto homeServices md:h-[68vh] h-[50] homeService">
                  <h4
                    className="text-sky-400 md:text-4xl text-2xl uppercase mt-2 training"
                    style={{ fontWeight: "300", color: "#5BF8FD" }}
                  >
                    AI SERVICES
                  </h4>
                  <div className="underline"></div>
                  <p className="text-sky-400 my-2" style={{ color: "#F5D537" }}>
                    &#60;AI as a Service &#62;
                  </p>
                  <p className="text-white my-4" style={{ fontSize: "13px" }}>
                    &#60;We develop customized groundbreaking data and AI
                    solutions for businesses for impact, effectiveness and
                    transformation{" "}
                    <Link className="text-yellow no-underline" to="/services">
                      Read More..
                    </Link>
                    &#62;
                  </p>
                  <MapImage
                    className="max-w-[500px] mx-auto"
                    src={ServicesAI}
                    alt="Continent image"
                  ></MapImage>
                </div>
              </OwlCarousel>
            </div>
          </ServiceWrapper>

          <Contribute className="md:py-16 py-4">
            <h3 className="text-center md:text-4xl text-3xl uppercase my-2">
              How To Contribute
            </h3>
            <div className="test"></div>

            <p className="text-center md:text-xl text-lg mt-4">
              Be part of something great!
            </p>

            <section className="pt-4 pb-4">
              <div className="">
                <div className="text-center sm:px-12 px-4 space-x-4 flex items-center justify-center">
                  <OwlCarousel {...contribute} className="carousel-wrapper">
                    <div className="slider mx-auto">
                      <div>
                        <img
                          // className="max-w-[300px]"
                          src={ContributeBackground}
                          alt="contributeBackground"
                        />
                        <div className="absolute w-full top-12 inset-x-2 text-xs text-center leading-4">
                          <p className="relative left-5 bottom-4 text-lg">
                            Funding
                          </p>

                          <div className="flex flex-col justify-center items-center px-20 relative md:top-40 top-20 space-y-2 right-2">
                            <p>
                              Help equip your staff with the right tools to
                              ensure continuity of your organization and to
                              remain up to speed with the development of
                              technology.
                            </p>
                            <img
                              className="max-w-[300px]"
                              src={ContributeFunding}
                              alt="Contribute Funding"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="slider mx-auto">
                      <div>
                        <img
                          className=""
                          src={ContributeBackground}
                          alt="contributeBackground"
                        />
                        <div className="absolute w-full py-2.5 top-12 inset-x-2 text-xs text-center leading-4">
                          <p className="relative left-5 bottom-4 text-lg">
                            Sponsor
                          </p>

                          <div className="flex flex-col justify-center items-center px-20 relative md:top-40 top-20 space-y-2 right-2">
                            <p>
                              As an AI/ML expert, AICE offers you an opportunity
                              to inspire, guide and lead upcoming talent.
                            </p>
                            <img
                              className=""
                              src={ContributeSponsor}
                              alt="Contribute Funding"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="slider mx-auto">
                      <div>
                        <img
                          className=""
                          src={ContributeBackground}
                          alt="contributeBackground"
                        />
                        <div className="absolute w-full py-2.5 top-12 inset-x-2 text-xs text-center leading-4">
                          <p className="relative left-5 bottom-4 text-lg">
                            Funding
                          </p>

                          <div className="flex flex-col justify-center items-center px-20 relative md:top-40 top-20 space-y-2 right-2">
                            <p>
                              Grow knowledge and share your publications or
                              research with a community of like minded scholars,
                              learners and developers.
                            </p>
                            <img
                              className=""
                              src={ContributeFunding}
                              alt="Contribute Funding"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="slider mx-auto">
                      <div>
                        <img
                          className=""
                          src={ContributeBackground}
                          alt="contributeBackground"
                        />
                        <div className="absolute w-full py-2.5 top-12 inset-x-2 text-xs text-center leading-4">
                          <p className="relative left-5 bottom-4 text-lg">
                            Use Cases
                          </p>

                          <div className="flex flex-col justify-center items-center px-20 relative md:top-40 top-20 space-y-2 right-2">
                            <p>
                              As an AI/ML expert, AICE offers you an opportunity
                              to inspire, guide and lead upcoming talent.
                            </p>
                            <img
                              className=""
                              src={ContributeCases}
                              alt="Contribute Funding"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </section>
          </Contribute>

          {/* <section className="my-16">
            <h3 className="uppercase text-center text-4xl">The lead Team</h3>

            <div className="w-8/12 mx-auto my-8 space-y-4">
              <div className="flex items-center gap-4 lead">
                <div className="space-y-4 flex flex-col items-end ">
                  <p className="text-3xl">John Kamara</p>
                  <p className="blue--background text-center w-7/12 py-4 leadTitle">
                    Chief Inspirational Officer
                  </p>
                  <img src={LeadTeamOne} alt="lead-team-one-image" />
                </div>
                <div className="space-y-4 flex flex-col items-start">
                  <p className="text-3xl">Claire Matuka</p>
                  <p className="blue--background text-center w-7/12 py-4 leadTitle">
                    Co-founder & AI Head
                  </p>
                  <img src={LeadTeamThree} alt="lead-team-three-image" />
                </div>
              </div>
              <div className="flex items-center gap-4 lead">
                <div className="space-y-4 flex flex-col items-end">
                  <img src={LeadTeamTwo} alt="lead-team-two-image" />
                  <p className="blue--background text-center w-7/12 py-4 leadTitle">
                    Business Head
                  </p>
                  <p className="text-3xl">Natasha Ochiel</p>
                </div>
                <div className="space-y-4 flex flex-col items-start">
                  <img src={LeadTeamFour} alt="lead-team-four-image" />
                  <p className="blue--background text-center w-7/12 py-4 leadTitle">
                    Tech & Software Lead
                  </p>
                  <p className="text-3xl">Jefferson Mkungusi</p>
                </div>
              </div>
            </div>
          </section> */}

          <PartnersWrapper className="sm:px-20 px-4 py-12 space-y-6 z-0">
            <h2 className="text-center text-4xl uppercase">
              Our Partner Community
            </h2>

            <div className="space-y-6">
              <p className="text-center text-yellow font-semibold text-xl partners">
                Backed up by Industry Leaders in Artificial Intelligence
              </p>
              <p className="text-center md:text-xl font-thin md:w-9/12 w-full mx-auto py-[3rem]">
                By 2030, AI technology is predicted to add over $15Trillion to
                the global economy.The AI centre of excellence is the the first
                and the leading outcome driven and action oriented platform for
                AI in africa.
              </p>
              <div className="">
                <OwlCarousel {...partners}>
                  {partnerLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center text-center item mt-8"
                    >
                      <img
                        className="object-contain"
                        style={{ maxWidth: "200px", height: "70px" }}
                        src={logo}
                        alt=""
                      />
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </PartnersWrapper>

          <section className="sm:px-12 px-4 sm:py-16 py-8">
            {/* <Testimonial className="py-16 px-12"> */}
            <h2 className="text-center sm:text-4xl text-2xl sm:font-bold">
              WHAT OUR COMMUNITY HAS TO SAY
            </h2>
            <div className="my-12">
              <OwlCarousel {...testimonials}>
                <div className="bg-blue sm:px-12 px-2 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                  <img
                    style={{ maxWidth: "80px", height: "80px" }}
                    className="sm:-mt-8 -mt-4 mx-auto rounded-full object-cover"
                    src={joy}
                    alt=""
                  />
                  <p className={`text-center text-xs`}>Joy Mwangi</p>
                  <p
                    className="text-center pb-4"
                    style={{ fontSize: "9px" }}
                  >
                    Aice has been an invaluable partner to us. Their
                    cutting-edge AI solutions have enabled us to stay
                    competitive in a rapidly evolving market, and their team has
                    provided us with the guidance and support we need to achieve
                    our goals.
                  </p>
                </div>
                <div className="bg-blue py-2 sm:py-4 sm:px-12 px-2 space-y-4 slider-card h-[30] mt-12">
                  <img
                    style={{ maxWidth: "80px", height: "80px" }}
                    className="-mt-8 mx-auto rounded-full object-cover"
                    src={gibson}
                    alt=""
                  />
                  <p className={`text-center text-xs`}>Gibson Gisore</p>
                  <p
                    className="text-center pb-4"
                    style={{ fontSize: "9px" }}
                  >
                    Partnering with Aice has been a game-changer for our
                    business. Their expertise in AI technology has helped us to
                    innovate and improve our processes, leading to increased
                    efficiency and profitability. Their dedication to our
                    success is truly exceptional.
                  </p>
                </div>

                <div className="bg-blue px-12 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                  <img
                    style={{ maxWidth: "80px", height: "80px" }}
                    className="-mt-8  mx-auto rounded-full object-cover"
                    src={warui}
                    alt=""
                  />
                  <p className={`text-center text-xs`}>Loise warui</p>
                  <p
                    className="text-center pb-4"
                    style={{ fontSize: "9px" }}
                  >
                    We've been blown away by the results we've achieved with
                    Aice. Their AI-driven approach has helped us to optimize our
                    operations and improve customer engagement, leading to
                    increased satisfaction and loyalty. We highly recommend Aice
                    to any company looking to stay ahead of the curve.
                  </p>
                </div>
                <div className="bg-blue px-12 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                  <img
                    style={{ maxWidth: "80px", height: "80px" }}
                    className="-mt-8  mx-auto rounded-full object-cover"
                    src={zuhudi}
                    alt=""
                  />
                  <p className={`text-center text-xs`}>umuhany zuhudi</p>
                  <p
                    className="text-center pb-4"
                    style={{ fontSize: "9px" }}
                  >
                    Aice's expertise in AI technology has been a game-changer
                    for our business. They've helped us to identify
                    opportunities for improvement and implement solutions that
                    have transformed our operations and bottom line. We're
                    grateful to have them as a partner.
                  </p>
                </div>
                <div className="bg-blue px-12 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                  <img
                    style={{ maxWidth: "80px", height: "80px" }}
                    className="-mt-8  mx-auto rounded-full object-cover"
                    src={jeff}
                    alt=""
                  />
                  <p className={`text-center text-xs`}>Jeff mkungusi</p>
                  <p
                    className="text-center pb-4"
                    style={{ fontSize: "9px" }}
                  >
                    Working with Aice has been a pleasure from start to finish.
                    Their team of experts has provided us with the guidance and
                    support we need to innovate and stay ahead of the
                    competition. Their dedication to our success is second to
                    none, and we highly recommend them to anyone looking for a
                    reliable partner in the world of AI.
                  </p>
                </div>
              </OwlCarousel>
            </div>
            {/* </Testimonial> */}

            
          </section>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const MapImage = styled.img``;

const Contribute = styled.div`
  background: url(${famImg});
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

const Testimonial = styled.div`
  background: url(${famImg});
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
    z-index: -1;
  }
`;

const Diagnosis = styled.div`
  background: url(${famImg});
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
    z-index: -1;
  }
`;

const ServiceWrapper = styled.div`
  background-image: url(${image});
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
    background-color: #001123;
    opacity: 0.8;
    z-index: -1;
  }
`;

const PartnersWrapper = styled.section`
  background: #10142d;
  color: #fff;
`;

export default Home;
