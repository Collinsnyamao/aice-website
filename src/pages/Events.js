import React, { useState } from "react";
import tech from "./../assets/upcoming.jpg";
import doc from "./../assets/doctor.jpg";
import { MdFavorite } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import Footer from "../components/Footer";
import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const upcomings = [
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${tech}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${doc}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${tech}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${doc}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${tech}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${doc}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${tech}`,
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur.",
    location: "Jakata Indonesia",
    price: "$10",
    name: "William Wills",
    month: "SEP",
    date: "20",
    image: `${doc}`,
  },
];

const Events = () => {
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
            Events
          </span>
        </Breadcrumbs>
      </div>
      <h1 className="text-center uppercase font-bold mt-8">Events</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-12 md:px-12 px-4">
        {upcomings.map((upcoming, index) => (
          <div className="relative" key={index}>
            <img className="rounded" src={upcoming.image} alt="" />
            <p className="absolute top-5 left-5 bg-white px-3 py-1">
              {upcoming.price}
            </p>
            <BsShare className="text-black absolute top-5 right-16 bg-white p-2 text-3xl rounded-full" />
            <MdFavorite className="text-grey absolute top-5 right-5 bg-white p-2 text-3xl rounded-full" />
            <div className="flex gap-4 bg-white p-2 shadow rounded">
              <div>
                <p>{upcoming.month}</p>
                <p>{upcoming.date}</p>
              </div>
              <div>
                <p className="font-semibold">{upcoming.description}</p>
                <p>{upcoming.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Events;
