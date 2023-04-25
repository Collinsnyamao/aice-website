import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import { MdOutlineLogin } from "react-icons/md";
// import { FaUserPlus } from "react-icons/fa";
import MenuIcon from "../assets/menu-icon.svg";

import FinalAICELogo from "../assets/Final-AICELogo.png";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ active, handleMenuClick }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [show, setShow] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {active ? (
        <NavbarSection className="">
          <div className="flex justify-between items-start py-6 w-10/12 mx-auto">
            <Link to="/" className="">
              <img
                className="md:w-22 h-16"
                src={FinalAICELogo}
                alt="AICE logo"
              />
            </Link>

            <div className="flex items-start gap-8 mt-10">
              <div className="flex flex-col items-center justify-center md:gap-10 gap-4 text-white">
                <Link
                  to="/"
                  className="border-2 no-underline border-yellow md:w-96 w-72 flex py-2 justify-center transition duration-150 ease-in-out hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">Home</div>
                </Link>
                <Link
                  to="/about"
                  className="border-2 no-underline border-yellow md:w-96 w-72 py-2 flex justify-center hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">About Us</div>
                </Link>
                <Link
                  to="/knowledge-center"
                  className="border-2 no-underline border-yellow md:w-96 w-72 py-2 px-4 flex justify-center hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">
                    Knowledge Center
                  </div>
                </Link>
                {/* <div className="border-2 border-yellow md:w-96 w-72 py-2 px-4 flex justify-center hover:bg-yellow">
                 <Link to="/paper-submission" className="md:text-2xl text-xl link">
                   Paper Submission
                 </Link>
               </div> */}
                <Link
                  to="/services"
                  className="border-2 no-underline border-yellow md:w-96 w-72 flex py-2 justify-center hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">AI Services</div>
                </Link>
                <Link
                  to="/research-development"
                  className="border-2 no-underline border-yellow md:w-96 w-72 py-2 flex justify-center hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">
                    Research & Development
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 no-underline border-yellow md:w-96 w-72 py-2 flex justify-center hover:bg-yellow"
                >
                  <div className="md:text-2xl text-xl link">Get In Touch</div>
                </Link>
                {/* <div className="ghost-button p-3 text-black">
                 <Link
                   to="/register"
                   className="text-sm flex justify-center items-center gap-2"
                 >
                   <FaUserPlus />
                   Sign Up
                 </Link>
               </div> */}

                {/* <div className="border border-yellow-500 p-3">
                 <Link
                   to="/login"
                   className="text-yellow-500 text-sm flex justify-center items-center gap-2"
                 >
                   <MdOutlineLogin />
                   Login
                 </Link>
               </div> */}
              </div>

              <button
                className="text-white text-5xl font-bold flex justify-end"
                onClick={handleMenuClick}
              >
                <AiOutlineClose className="text-2xl md:text-4xl" />
              </button>
            </div>
          </div>
        </NavbarSection>
      ) : (
        <nav className="nav--background nav z-10">
          <div className="flex items-center justify-between w-full px-4">
            <img
              style={{ maxWidth: "80px" }}
              className="object-cover"
              src={FinalAICELogo}
              alt="AICE logo"
            />
            <div className="">
              <button
                className="flex items-center gap-3 text-white"
                onClick={handleMenuClick}
              >
                <div>Menu</div>
                <img className="w-10 h-10" src={MenuIcon} alt="menu icon" />
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

const NavbarSection = styled.div`
  background: #10142d;
  height: 100vh;
`;

export default Navbar;
