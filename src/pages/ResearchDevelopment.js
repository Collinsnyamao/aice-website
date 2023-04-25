import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg.png";
import projectBg from "../assets/projBack.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import ProjectsSection from "../components/Projects";

import SearchIcon from "../assets/search-icon.png";
import ArticleAuthor from "../assets/article-author.jpg";

import "../assets/css/rnd.css";

// import image
import ResearchRepositoryBackgroundChart from "../assets/graph.png";
import backImg from "../assets/backG.png";

// import icons
import { BsPersonFill } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosFunnel } from "react-icons/io";

function ResearchDevelopment() {
  const [toggleTab, setToggleTab] = useState(1);
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navbar active={active} handleMenuClick={handleMenuClick} />

      {!active ? (
        <>
          <ResearchDevelopmentWrapper className="mt-24">
            <div className="bg-yellow sm:px-12 px-2 flex justify-start text-blue items-center pt-1">
              <div
                onClick={() => setToggleTab(1)}
                className={`cursor-pointer hover:bg-white float-left px-2 md:w-2/12 w-4/12 sm:py-3 py-4 ${
                  toggleTab === 1 ? "bg-white" : "bg-inherit"
                }`}
              >
                {/* <VscMenu className="" /> */}
                <p className="font-semibold text-center md:text-base text-xs">
                  Background
                </p>
              </div>
              {/* <div
                onClick={() => setToggleTab(2)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer w-4/12 hover:bg-white md:py-3 py-4 ${
                  toggleTab === 2 ? "bg-white" : "bg-inherit"
                }`}
              >
                <p className="font-semibold text-center text-base md:block hidden">
                  Research Repository
                </p>
                <p className="font-semibold text-center md:hidden block text-xs">
                  R & D
                </p>
              </div> */}
              {/* <div
                onClick={() => setToggleTab(3)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer md:pt-3 py-4 w-4/12 hover:bg-white ${
                  toggleTab === 3 ? "bg-white" : "bg-inherit"
                }`}
              >
                <p className="font-semibold md:text-base text-xs">Articles</p>
              </div> */}
              {/* <div
                onClick={() => setToggleTab(4)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer md:py-3 py-4 w-4/12 hover:bg-white ${
                  toggleTab === 4 ? "bg-white" : "bg-inherit"
                }`}
              >
                <p className="font-semibold md:text-base text-xs">
                  Publications
                </p>
              </div> */}
            </div>

            {toggleTab === 1 ? (
              <First className="md:px-24 px-4">
                <div className="md:flex gap-8 items-center h-auto py-12 justify-center grid">
                  <div className="md:w-7/12 w-full md:mx-12">
                    <h5>AI RESEARCH AND DEVELOPMENT</h5>
                    <p className="">
                      AI research and products are estimated to contribute over
                      <span className="text-yellow font-semibold">
                        {" "}
                        $13 trillion
                      </span>{" "}
                      to the global economy by 2030. The AI Centre of Excellence
                      aims to leverage off this by diving into
                      <span className="text-yellow font-semibold">
                        {" "}
                        sustainable impact
                      </span>{" "}
                      through research and development that is focused on
                      developing impactful, necessary and needed global
                      solutions.
                    </p>
                    <br></br>
                    <p className="">
                      <span className="text-yellow font-semibold">Outcome</span>{" "}
                      : Develop tools, products, services, create solutions and
                      build AI centered Start-Ups
                    </p>
                    <br></br>
                    <p className="">
                      Today, tons of research has gone into solving global
                      challenges, at AICE we aim to contribute to this research
                      by focusing on data and AI's contribution. We focus on
                      carrying out{" "}
                      <span className="text-yellow font-semibold">
                        intensive research to build solutions
                      </span>{" "}
                      Research and development will enable the centre to{" "}
                      <span className="text-yellow font-semibold">
                        investigate
                      </span>{" "}
                      and come up with{" "}
                      <span className="text-yellow font-semibold">
                        top tier innovations.
                      </span>
                    </p>
                    <br></br>
                    <p className="">
                      Want to contribute to our drive for solution based AI
                      Research and Development?
                    </p>
                  </div>
                  <div className="md:w-5/12 w-full md:mx-12 mx-auto">
                    <p className="font-semibold">
                      AI Contribution to Global Economy
                    </p>
                    <img
                      className="w-10/12 object-cover"
                      src={ResearchRepositoryBackgroundChart}
                      alt="Research and Development page graph"
                    />
                  </div>
                </div>
              </First>
            ) : toggleTab === 2 ? (
              <Second className="py-12 sm:px-24 px-4">
                <div class="md:flex items-center justify-between gap-8 space-y-4">
                  <div className="border-2 border-black flex items-center py-2 pl-2 h-12 gap-1 md:w-8/12 w-full">
                    <img
                      className="w-5 mt-1 h-auto messageIcon"
                      src={SearchIcon}
                      alt="search icon"
                    />
                    <input
                      type="text"
                      className="w-full font-semibold outline-none bg-inherit border-none py-2 bg-transparent"
                      placeholder="Search"
                    />
                    <button className="bg-blue text-yellow py-2 h-12 font-semibold px-4">
                      SEARCH
                    </button>
                  </div>
                  <div class="flex items-center md:w-4/12 w-full">
                    <div className="w-3/12">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                      >
                        <strong>Sort By</strong>
                      </label>
                    </div>
                    <div className="w-9/12">
                      <select
                        id="countries"
                        className="bg-transparent border-1 border-black focus:outline-none text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Relevance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="md:flex justify-center items-center grid gap-2">
                  <div class="md:w-3/12 w-full mx-auto py-10">
                    <button className="bg-blue text-second p-3">
                      <span
                        style={{
                          display: "inline-block",
                        }}
                      >
                        <BsFileEarmarkPlus
                          className="text-2x1 style={{
                          display: 'inline-block',
                        }}"
                        />
                      </span>
                      ADD TO REPOSITORY{" "}
                    </button>

                    <div class="mt-4 mb-5">
                      <p>
                        <strong>Filters</strong>
                      </p>

                      <div class="content-start">
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none bg-transparent h-12 px-3 font-semibold"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none px-3 bg-transparent h-12 font-semibold"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                      </div>

                      <button className="flex w-full items-center justify-center font-semibold bg-yellow p-3">
                        <span
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <IoIosFunnel className="text-2xl" />
                        </span>
                        Apply Filters
                      </button>
                    </div>
                  </div>

                  <div class="py-10 md:w-8/12 w-full mx-auto">
                    <div>
                      <div class="font-semibold mb-3">Search Results</div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Second>
            ) : toggleTab === 3 ? (
              <Third className="py-12 sm:px-24 px-4">
                <div class="md:flex items-center justify-between gap-8 space-y-4">
                  <div className="border-2 border-black flex items-center py-2 pl-2 h-12 gap-1 md:w-8/12 w-full">
                    <img
                      className="w-5 mt-1 h-auto messageIcon"
                      src={SearchIcon}
                      alt="search icon"
                    />
                    <input
                      type="text"
                      className="w-full outline-none bg-inherit border-none subscribe py-2 bg-transparent"
                      placeholder="Search"
                    />
                    <button className="bg-blue text-yellow py-2 h-12 font-semibold px-4">
                      SEARCH
                    </button>
                  </div>
                  <div class="flex items-center md:w-4/12 w-full">
                    <div className="w-3/12">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                      >
                        <strong>Sort By</strong>
                      </label>
                    </div>
                    <div className="w-9/12">
                      <select
                        id="countries"
                        className="bg-transparent border-1 border-black focus:outline-none text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Relevance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="md:flex justify-center grid gap-2">
                  <div class="md:w-3/12 w-full mx-auto py-3">
                    <div class="mt-4 mb-5">
                      <p>
                        <strong>Filters</strong>
                      </p>

                      <div class="content-start">
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none bg-transparent h-12 px-3 font-semibold"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none px-3 bg-transparent h-12 font-semibold"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                      </div>

                      <button className="flex w-full items-center justify-center font-semibold bg-yellow p-3">
                        <span
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <IoIosFunnel className="text-2xl" />
                        </span>
                        Apply Filters
                      </button>
                    </div>
                  </div>

                  <div class="py-10 md:w-8/12 w-full mx-auto">
                    <div>
                      <div class="font-semibold mb-3">Search Results</div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Third>
            ) : toggleTab === 4 ? (
              <Fourth className="py-12 sm:px-24 px-4">
                <div class="md:flex items-center justify-between gap-8 space-y-4">
                  <div className="border-2 border-black flex items-center py-2 pl-2 h-12 gap-1 md:w-8/12 w-full">
                    <img
                      className="w-5 mt-1 h-auto messageIcon"
                      src={SearchIcon}
                      alt="search icon"
                    />
                    <input
                      type="text"
                      className="w-full outline-none bg-inherit border-none subscribe py-2 bg-transparent"
                      placeholder="Search"
                    />
                    <button className="bg-blue text-yellow py-2 h-12 font-semibold px-4">
                      SEARCH
                    </button>
                  </div>
                  <div class="flex items-center md:w-4/12 w-full">
                    <div className="w-3/12">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                      >
                        <strong>Sort By</strong>
                      </label>
                    </div>
                    <div className="w-9/12">
                      <select
                        id="countries"
                        className="bg-transparent border-1 border-black focus:outline-none text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Relevance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="md:flex justify-center grid gap-2">
                  <div class="md:w-3/12 w-full mx-auto py-3">
                    <div class="mt-4 mb-5">
                      <p>
                        <strong>Filters</strong>
                      </p>

                      <div class="content-start">
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none bg-transparent h-12 px-3 font-semibold"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between border-2 my-3">
                          <input
                            className="w-full outline-none px-3 bg-transparent h-12 font-semibold"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                        <div className="flex items-center justify-between gap-2 border-2 my-3">
                          <input
                            className="w-full px-3 outline-none bg-transparent h-12"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-6xl bg-blue text-yellow px-3 h-12" />
                        </div>
                      </div>

                      <button className="flex w-full items-center justify-center font-semibold bg-yellow p-3">
                        <span
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <IoIosFunnel className="text-2xl" />
                        </span>
                        Apply Filters
                      </button>
                    </div>
                  </div>

                  <div class="py-10 md:w-8/12 w-full mx-auto">
                    <div>
                      <div class="font-semibold mb-3">Search Results</div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border-2 border-black mb-3">
                        <div className="px-2">
                          <div class="font-semibold mb-1 ml-3 mt-2">
                            Blockchain Research on Impact of cryptocurrency on
                            economy.
                          </div>
                          <div class="flex flex-row">
                            <div class="flex flex-row">
                              <div class="ml-3">
                                <img
                                  class="mb-3 w-7 h-7 rounded-full shadow-lg"
                                  src={ArticleAuthor}
                                  alt="article author"
                                />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                Marc De Mesel
                              </div>
                            </div>
                            <div class="flex flex-row ml-10">
                              <div>
                                <AiOutlineCalendar className="text-2xl" />
                              </div>
                              <div class="ml-2 text-yellow font-semibold">
                                23/04/2012
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fourth>
            ) : null}
          </ResearchDevelopmentWrapper>

          <ProjectsWrapper>
            <div className="sm:px-20 px-4">
              <ProjectsSection />
            </div>
          </ProjectsWrapper>

          <RegisterWrapper>
            <Subscribe />
          </RegisterWrapper>

          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const ResearchDevelopmentWrapper = styled.section``;

const First = styled.div`
  background: url(${backImg});
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
    background-color: white;
    opacity: 0.94;
    z-index: -1;
  }
`;

const Second = styled.div`
  background: url(${backImg});
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
    background-color: white;
    opacity: 0.94;
    z-index: -1;
  }
`;

const Third = styled.div`
  background: url(${backImg});
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
    background-color: white;
    opacity: 0.94;
    z-index: -1;
  }
`;

const Fourth = styled.div`
  background: url(${backImg});
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
    background-color: white;
    opacity: 0.94;
    z-index: -1;
  }
`;

const ProjectsWrapper = styled.section`
  background-image: url(${bg});
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
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
`;

const RegisterWrapper = styled.section`
  background-image: url(${bg});
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
    opacity: 0.7;
    z-index: -1;
  }
`;

export default ResearchDevelopment;
