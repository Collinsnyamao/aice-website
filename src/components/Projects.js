// imports
import Service1 from "../assets/projImg4.png";
import Service2 from "../assets/projImg.png";
import Service3 from "../assets/proj3.png";
import bottomImg from "../assets/proj2.png";
import topImg from "../assets/proj1.png";
import underImg from "../assets/under.png";
import side from "../assets/side.png";
import side1 from "../assets/side1.png";
import HeroBackground from "../assets/HeroBackground.png";
import ContributeBackground from "../assets/Group-183.svg";
import styled from "styled-components";

import serviceLeft from "../assets/arrowBL.png";
import serviceRight from "../assets/arrowBR.png";

import "../assets/css/hero_background.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProjectsSection = () => {
  const rules = {
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
        center: false,
        dots: true,
        nav: true,
        navText: [
          `<img style="width: 40px; height: 40px;" src=${serviceRight} alt="images" />`,
          `<img style="width: 40px; height: 40px;" src=${serviceLeft} alt="images" />`,
        ],
      },
      480: {
        items: 1,
        nav: true,
        center: false,
      },
      769: {
        items: 3,
        nav: true,
        center: true,
      },
    },
    navText: [
      `<img style="width: 70px; height: 70px;" src=${serviceRight} alt="images" />`,
      `<img style="width: 70px; height: 70px;" src=${serviceLeft} alt="images" />`,
    ],
  };

  return (
    <div className="bg-slate-900">
      <section className="py-8">
        <h3 className="text-center text-4xl uppercase text-white mb-10">
          Our Projects
        </h3>
        <OwlCarousel {...rules}>
          <div className="slider mx-auto">
            <img
              className="object-cover mx-auto h-full"
              src={ContributeBackground}
              alt="contributeBackground"
            />
            <div className="absolute w-full md:top-20 top-14 inset-x-2 text-xs text-center leading-4">
              <p className="relative left-5 bottom-4 text-lg text-second font-semibold indent-6">
                Project<br></br>One
              </p>

              <div className="flex flex-col justify-center items-center px-4 relative space-y-4 right-2">
                <img src={Service1} alt="Hero Background" />
                <p className="font-semibold text-white">CASPRE <br /> <span className="text-xs font-normal">(Credit analysis and score prediction Tool)</span></p>
                <p className="font-medium text-white px-2 leading-6">
                  Caspre is an AI credit score analysis and prediction tool that
                  helps financial institutions and lending companies evaluate
                  the creditworthiness of their customers. Using machine
                  learning algorithms, Caspre analyzes multiple data points to
                  provide accurate credit risk assessments and predictions. This
                  AI tool can help reduce the risk of loan defaults and improve
                  the efficiency of credit underwriting processes.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="slider mx-auto">
            <img
              className="object-cover mx-auto h-full"
              src={ContributeBackground}
              alt="contributeBackground"
            />
            <div className="absolute w-full md:top-20 top-14 inset-x-2 text-xs text-center leading-4">
              <p className="relative left-5 md:bottom-4 bottom-32 text-lg text-second font-semibold indent-6">
                Project<br></br>One
              </p>

              <div className="flex flex-col justify-center items-center px-4 relative space-y-4 right-2">
                <img className="" src={Service1} alt="Services" />
                <p className="font-semibold text-white text-left">CASPRE</p>
                <p className="text-white px-2 leading-6">
                  An intelligent and data driven credit scoring system that
                  combines set business rules, artificial intelligence and
                  machine learning. CASPRE provides value for its users through
                  individually personalized and dynamic credit scores, insight
                  generation and easy usability.
                </p>
              </div>
            </div>
          </div> */}

          <div className="slider mx-auto">
            <img
              className="object-cover mx-auto h-full"
              src={ContributeBackground}
              alt="contributeBackground"
            />
            <div className="absolute w-full md:top-20 top-14 inset-x-2 text-xs text-center leading-4">
              <p className="relative left-5 bottom-4 text-lg text-second font-semibold indent-6">
                Project<br></br>Two
              </p>

              <div className="flex flex-col justify-center items-center px-4 relative space-y-4 right-2">
                <img src={Service3} alt="Hero Background" />
                <p className="font-semibold text-white">BLUE AI <br /> <span className="text-xs font-normal">(AI Health diagnostic tool)</span></p>
                <p className="font-medium text-white px-2 leading-6">
                  A health AI chatbot that helps users determine their risk
                  level for various types of cancer. The chatbot provides
                  personalized, evidence-based information and support to
                  increase users' awareness of different types of cancer. With
                  BlueAI, users can make informed decisions about their health
                  and take proactive steps to reduce their risk of developing
                  cancer.
                </p>
              </div>
            </div>
          </div>

          <div className="slider mx-auto">
            <img
              className="object-cover mx-auto h-full"
              src={ContributeBackground}
              alt="contributeBackground"
            />
            <div className="absolute w-full md:top-20 top-14 inset-x-2 text-xs text-center leading-4">
              <p className="relative left-5 bottom-4 text-lg text-second font-semibold indent-3">
                Project<br></br>Three
              </p>

              <div className="flex flex-col justify-center items-center px-4 relative space-y-4 right-2">
                <img src={Service1} alt="Services" />
                <p className="font-semibold text-white">One Farmer</p>
                <p className="text-xs font-medium text-white px-2 leading-6">
                  An AI tool that uses agricultural and climate data to provide
                  farmers with personalized recommendations on the best farming
                  practices in response to climate change. It predicts
                  environmental changes and recommends possible actions to help
                  farmers mitigate the impact of climate change on their crops
                  and improve their yields.
                </p>
              </div>
            </div>
          </div>

          <div className="slider mx-auto">
            <img
              className="object-cover mx-auto h-full"
              src={ContributeBackground}
              alt="contributeBackground"
            />
            <div className="absolute w-full md:top-20 top-14 inset-x-2 text-xs text-center leading-4">
              <p className="relative left-5 bottom-4 text-lg text-second font-semibold indent-3">
                Project<br></br>Four
              </p>

              <div className="flex flex-col justify-center items-center px-4 relative space-y-4 right-2 pb-4">
                <img src={Service2} alt="Services" />
                <p className="font-semibold text-white">AiDiagnosticTool <br /> <span className="text-xs font-normal">(AI Readiness diagnostic tool)</span></p>
                <p className="text-xs font-medium text-white px-2 leading-6">
                  AiDiagnosticTool is an AI tool that helps organizations gauge
                  their readiness to integrate AI into their operations. This
                  tool evaluates an organization's existing data infrastructure,
                  technology capabilities, and workforce readiness to identify
                  gaps and opportunities for AI implementation. It can help
                  businesses make informed decisions about the potential
                  benefits and risks of AI adoption, and develop a roadmap for
                  successful implementation.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>

        <div className="md:block hidden">
          <OwlCarousel {...rules}>
            <div className="sliderText">
              <h2 className="text-center text-lg uppercase hidden md:block">
                Past Projects
              </h2>
            </div>
            <div className="sliderText">
              <h2 className="text-center text-lg uppercase hidden md:block">
                Past Projects
              </h2>
            </div>
            <div className="sliderText">
              <h2 className="text-center text-lg uppercase hidden md:block">
                Past Projects
              </h2>
            </div>
          </OwlCarousel>
        </div>

        {/* <div className="flex justify-center mt-20">
          <OwlCarousel {...rules}>
            <div>
              <h2 className="text-center text-xl uppercase mr-20 mb-10 px-20 text-second hidden md:block">
                Past Projects
              </h2>
            </div>
            <div>
              <h2 className="text-center text-xl uppercase mr-20 mb-10 px-20 text-second">
                Current Projects
              </h2>
            </div>
            <div>
              <h2 className="text-center text-xl uppercase mr-20 mb-10 px-20 text-second hidden md:block">
                Future Projects
              </h2>
            </div>
          </OwlCarousel>
        </div> */}
      </section>
    </div>
  );
};

const TopImg = styled.div`
  background: url(${topImg});
  background-repeat: no-repeat;
  // background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
`;
const BottomImg = styled.div`
  background: url(${bottomImg});
  background-repeat: no-repeat;
  // background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
`;

const UnderImg = styled.div`
  background: url(${underImg});
  background-repeat: no-repeat;
  // background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  color: white;
`;

export default ProjectsSection;
