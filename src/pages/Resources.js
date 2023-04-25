import React, { useState } from "react";
import image from "./../assets/HeroBackground.png";
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

const resources = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi.",
    name: "William Wills",
    date: "2022-03-25",
    image: `${image}`,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi.",
    name: "Susan Donna",
    date: "2022-03-25",
    image: `${image}`,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi.",
    name: "Emma Willis",
    date: "2022-03-25",
    image: `${image}`,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi.",
    name: "Don Moen",
    date: "2022-03-25",
    image: `${image}`,
  },
];

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

const Resources = () => {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Navbar active={active} handleMenuClick={handleMenuClick} />
      <div className="mt-24 bg-yellow py-1">
        <Breadcrumbs separator={<FaAngleRight />}>
          <Link to="/">
            <IoIosHome className="text-xl text-black" />
          </Link>
          <span className="text-black font-semibold text-xl cursor-default">
            Resources
          </span>
        </Breadcrumbs>
      </div>
      <section className="md:px-12 px-4">
        <div className="my-8">
          <h1 className="text-center font-bold">Resources</h1>
          <div className="md:flex grid items-center justify-around mt-4">
            <div>
              <h3 className="font-bold">
                Discover the latest Technology and Innovations
              </h3>
            </div>
            <div>
              <p>Drop Down</p>
            </div>
          </div>
        </div>
        <div className="md:flex grid items-center gap-4">
          {resources.map((resource, index) => (
            <div key={index}>
              <img className="md:w-80 w-full" src={resource.image} alt="" />
              <div className="bg-blue py-3 px-2 md:w-80 w-full">
                <p className="text-white text-sm">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <small className="text-yellow font-bold">
                    {resource.name}
                  </small>
                  <small className="text-grey text-sm">{resource.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8">
          <h4 className="text-center">Gallery</h4>
          <h2 className="text-center">Unforgettable Moments</h2>
          <div className="md:flex grid items-center justify-center gap-4 my-4">
            <div className="md:w-1/2 w-full">
              <img
                style={{ height: "61vh" }}
                className="rounded w-full object-cover"
                src={image}
                alt=""
              />
              <p className="-mt-12 text-yellow text-xl px-2">Nairobi</p>
            </div>
            <div className="md:w-1/2 w-full grid gap-2">
              <div>
                <img
                  style={{ height: "30vh" }}
                  className="rounded w-full object-cover"
                  src={image}
                  alt=""
                />
                <p className="-mt-12 text-yellow text-xl px-2">Dubai</p>
              </div>
              <div className="md:flex grid gap-2">
                <div className="md:w-1/2 w-full">
                  <img
                    style={{ height: "30vh" }}
                    className="rounded w-full object-cover"
                    src={image}
                    alt=""
                  />
                  <p className="-mt-12 text-yellow text-xl px-2">London</p>
                </div>
                <div className="md:w-1/2 w-full">
                  <img
                    style={{ height: "30vh" }}
                    className="rounded w-full object-cover"
                    src={image}
                    alt=""
                  />
                  <p className="-mt-12 text-yellow text-xl px-2">Dodoma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-bold">Upcoming Events</h2>
          <p className="font-semibold">
            Events keep us connected. We hold events that bring together AI/ML
            practitioners and enthusiasts (COVID 19 protocals are upheld during
            our events to make sure everyone is safe.)
          </p>
          <div className="flex items-center justify-center gap-4 my-12">
            <button className="bg-grey rounded p-3">Weekends</button>
            <button className="bg-grey rounded p-3">Weekdays</button>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
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
          <div className="flex items-center justify-center my-12">
            <button className="bg-white border-2 border-black p-3">
              More Events
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resources;
