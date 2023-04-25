import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepConnector from "@material-ui/core/StepConnector";
import { questionOne, questionTwo } from "./questions/data";
import Footer from ".././components/Footer";
import { IoIosHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Resources from "./Resources";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Events from "./Events";
import Navbar from "../components/Navbar";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  // },
  backButton: {
    marginRight: theme.spacing(16),
    float: "right",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(18),
    marginRight: theme.spacing(18),
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

function getSteps() {
  return [
    "Company Info",
    "All Plan",
    "People and Organization",
    "Miscellaneous",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <section className="md:flex grid md:items-center md:justify-between w-full">
            <div className="md:w-1/2 w-full mx-3">
              <div className="md:flex grid items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">
                  Full Name
                </p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="Full name..."
                />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">
                  Company Name
                </p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="Company name"
                />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">Industry</p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="Industry"
                />
              </div>
            </div>
            <div className="w-1/2 mx-3">
              <div className="flex items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">
                  Email Adress
                </p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">
                  Headquarters
                </p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="Headquarters"
                />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="md:block hidden w-3/12 font-semibold">
                  No. of employees
                </p>
                <input
                  className="border-2 border-black py-3 px-2 rounded w-full"
                  placeholder="No. of employees"
                />
              </div>
            </div>
          </section>
          <div className="md:flex grid my-3">
            <p className="md:block hidden font-semibold">Company Website</p>
            <input
              className="border-2 border-black py-3 px-2 rounded w-full"
              placeholder="Company Website"
            />
          </div>
        </div>
      );
    case 1:
      return (
        <section>
          <h6 className="font-bold">
            What plan of action towards AI currently exists in your company?
          </h6>
          <ul>
            {questionOne.map((question, index) => (
              <li className="list-disc my-3" key={index}>
                {question}
              </li>
            ))}
          </ul>
          <h6 className="font-bold mt-8">
            What plan of action towards AI currently exists in your company?
          </h6>
          <ul>
            {questionTwo.map((question, index) => (
              <li className="list-disc my-3" key={index}>
                {question}
              </li>
            ))}
          </ul>
        </section>
      );
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [toggleTab, setToggleTab] = React.useState(1);
  const steps = getSteps();
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Navbar active={active} handleMenuClick={handleMenuClick} />
      <div className="mt-24 bg-yellow py-1">
        <Breadcrumbs separator={<FaAngleRight />}>
          <Link to='/'>
            <IoIosHome className="text-xl text-black" />
          </Link>
          <span className="cursor-default text-black font-semibold text-xl">
            Form
          </span>
        </Breadcrumbs>
      </div>

      {/* <div className="bg-yellow md:px-12 px-1 py-2 mt-24">
        <div className="flex mt-2">
          <div className="md:block hidden">
            <IoIosHome className="text-xl mx-2" />
          </div>
          <div onClick={() => setToggleTab(1)}>
            <p
              className={`mx-2 cursor-pointer ${
                toggleTab === 1 ? "font-bold" : "font-normal"
              }`}
            >
              Form
            </p>
          </div>
          <div onClick={() => setToggleTab(2)}>
            <p
              className={`mx-2 cursor-pointer ${
                toggleTab === 2 ? "font-bold" : "font-normal"
              }`}
            >
              Resources
            </p>
          </div>
          <div onClick={() => setToggleTab(3)}>
            <p
              className={`mx-2 cursor-pointer ${
                toggleTab === 3 ? "font-bold" : "font-normal"
              }`}
            >
              Blog
            </p>
          </div>
          <div onClick={() => setToggleTab(4)}>
            <p
              className={`mx-2 cursor-pointer ${
                toggleTab === 4 ? "font-bold" : "font-normal"
              }`}
            >
              Gallery
            </p>
          </div>
          <div onClick={() => setToggleTab(5)}>
            <p
              className={`mx-2 cursor-pointer ${
                toggleTab === 5 ? "font-bold" : "font-normal"
              }`}
            >
              Events
            </p>
          </div>
        </div>
      </div> */}

      {toggleTab === 1 && (
        <>
          <section className="md:px-12 px-4">
            <div className={classes.root}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <div className="float-right">
                  <Typography className={classes.instructions}>
                    All steps completed
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div className="mb-24">
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <button
                      className="float-right bg-black text-yellow px-3 py-2 uppercase rounded mr-36"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </button>
                    <button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="bg-grey px-3 py-2 text-black float-right mx-4"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
          <Footer />
        </>
      )}
      {toggleTab === 2 && (
        <>
          {" "}
          <Resources />{" "}
        </>
      )}
      {toggleTab === 3 && (
        <>
          {" "}
          <Blog />{" "}
        </>
      )}
      {toggleTab === 4 && (
        <>
          {" "}
          <Gallery />{" "}
        </>
      )}
      {toggleTab === 5 && (
        <>
          {" "}
          <Events />{" "}
        </>
      )}
    </>
  );
};

export default Form;
