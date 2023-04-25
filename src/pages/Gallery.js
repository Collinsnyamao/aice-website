import React, { useState } from "react";
import Footer from "../components/Footer";
import image from "./../assets/HeroBackground.png";
import doc from "./../assets/doctor.jpg";
import tech from "./../assets/upcoming.jpg";
import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const images = [
  {
    img: `${doc}`,
    dest: "Nairobi",
  },
  {
    img: `${tech}`,
    dest: "Nairobi",
  },
  {
    img: `${doc}`,
    dest: "Nairobi",
  },
  {
    img: `${tech}`,
    dest: "Nairobi",
  },
  {
    img: `${doc}`,
    dest: "Nairobi",
  },
  {
    img: `${tech}`,
    dest: "Nairobi",
  },
];

const Gallery = () => {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };
  return (
    <>
      <Navbar active={active} handleMenuClick={handleMenuClick} />
      <div className="mt-24 bg-yellow py-1">
        <Breadcrumbs separator={<FaAngleRight />}>
          <Link to='/'>
            <IoIosHome className="text-xl text-black" />
          </Link>
          <Link to="/resources" className="no-underline text-black text-xl">
            Resources
          </Link>
          <span className="text-black font-semibold text-xl cursor-default">
            Gallery
          </span>
        </Breadcrumbs>
      </div>
      <h1 className="uppercase font-bold text-center my-8">Gallery</h1>
      <div className="grid md:gap-24 gap-8 md:grid-cols-2 grid-cols-1 md:px-12 px-4 my-12">
        {images.map((image, index) => (
          <div key={index}>
            <img className="rounded-xl" src={image.img} alt="" />
            <p className="-mt-12 text-xl text-yellow font-semibold px-4">
              {image.dest}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
