import React, { useState } from "react";
import image from "./../assets/HeroBackground.png";
import { BsDashLg } from "react-icons/bs";
import Footer from "../components/Footer";
import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const posts = [
  {
    image: `${image}`,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita",
    date: "14/7/2022",
  },
  {
    image: `${image}`,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita",
    date: "14/7/2022",
  },
  {
    image: `${image}`,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita",
    date: "14/7/2022",
  },
];

const categories = [
  "AI",
  "Technology",
  "Machine Learning",
  "Internet of thnings",
];

const Blog = () => {
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
            Blog
          </span>
        </Breadcrumbs>
      </div>
      <h1 className="font-bold text-center my-12 uppercase">Blog</h1>
      <div className="md:flex grid justify-between md:gap-32 gap-4 md:px-12 px-4">
        <div className="md:w-7/12 w-full">
          <img className="rounded" src={image} alt="" />
          <p className="font-semibold my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            quam unde, quaerat ipsam error corrupti delectus atque sed. Iusto
            maxime animi corporis exercitationem nobis odio quis recusandae
            natus quibusdam molestiae.
          </p>
        </div>
        <div className="md:w-5/12 w-full">
          <div className="bg-white shadow py-3 md:px-4 px-2 rounded">
            <h3 className="font-semibold">Recent Post</h3>
            {posts.map((post, index) => (
              <div className="flex items-center" key={index}>
                <div>
                  <img
                    className="w-48 my-3 rounded object-cover"
                    src={post.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="md:font-semibold font-normal">{post.desc}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white shadow text-left px-4 py-3 my-4 rounded">
            {categories.map((category, index) => (
              <>
                <div key={index} className="flex items-center gap-4">
                  <BsDashLg />
                  <p>{category}</p>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="md:px-12 px-4 my-12">
        <h2 className="font-bold">Artificial Intelligence</h2>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          accusantium nam minus aliquid? At, in culpa incidunt debitis deleniti
          iure, iste sed consequatur blanditiis magni voluptates. Beatae
          obcaecati facere necessitatibus?
        </p>
        <img className="rounded h-96 w-full object-cover" src={image} alt="" />
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non
          dignissimos id accusamus aut distinctio, doloremque iure quaerat
          perspiciatis, excepturi aliquid dicta architecto nobis possimus.
          Praesentium reprehenderit itaque commodi veniam nihil, quae
          necessitatibus quaerat assumenda sed dolore officiis voluptas alias!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
