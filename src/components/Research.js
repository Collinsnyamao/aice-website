import React, { useState } from "react";
import styled from "styled-components";
import HeroBackground from "../assets/HeroBackground.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import ProjectsSection from "../components/Projects";

import SearchIcon from "../assets/search-icon.png";
import ArticleAuthor from "../assets/article-author.jpg";

import "../assets/css/rnd.css";

// import image
import ResearchRepositoryBackgroundChart from "../assets/researchRepositoryBackgroundChart.png";

// import icons
import { BsPersonFill } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosFunnel } from "react-icons/io";

function Research() {
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
          <ResearchDevelopmentWrapper>
            <div className="bg-yellow md:px-12 px-2 flex justify-center items-center">
              <div
                onClick={() => setToggleTab(1)}
                className={`cursor-pointer hover:bg-white px-2 w-3/12 py-2 ${
                  toggleTab === 1 ? "bg-white" : "bg-inherit"
                }`}
              >
                {/* <VscMenu className="" /> */}
                <p className="font-semibold text-xs text-center">Background</p>
              </div>
              <div
                onClick={() => setToggleTab(2)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer py-2 w-4/12 hover:bg-white ${
                  toggleTab === 2 ? "bg-white" : "bg-inherit"
                }`}
              >
                {/* <GiArchiveResearch className="text-2xl mx-auto" /> */}
                <p className="font-semibold text-xs text-center">
                  Research Repository
                </p>
              </div>
              <div
                onClick={() => setToggleTab(3)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer py-2 w-4/12 hover:bg-white ${
                  toggleTab === 3 ? "bg-white" : "bg-inherit"
                }`}
              >
                {/* <GrArticle className="text-2xl mx-auto" /> */}
                <p className="font-semibold text-xs">Articles</p>
              </div>
              <div
                onClick={() => setToggleTab(4)}
                className={`md:flex grid gap-3 items-center justify-center cursor-pointer py-2 w-4/12 hover:bg-white ${
                  toggleTab === 4 ? "bg-white" : "bg-inherit"
                }`}
              >
                {/* <IoIosPaper className="text-2xl mx-auto" /> */}
                <p className="font-semibold text-xs">Publications</p>
              </div>
            </div>

            {toggleTab === 1 ? (
              <First>
                <div className="md:flex items-center h-screen justify-center grid md:px-24 px-4 mx-auto">
                  <div className="md:w-8/12 w-11/12 mx-auto">
                    <p>
                      AI research and products are estimated to contribute over
                      <span className="text-yellow">$13 trillion</span> to the global economy by 2030. The AI Centre
                      of Excellence aims to leverage off this by diving into
                      <span className="text-yellow">sustainable impact</span> through research and development that
                      is focused on developing impactful, necessary and needed
                      global solutions.
                    </p>
                    <br></br>
                    <p>
                      <span className="text-yellow">Outcome</span>: Develop tools, products, services and build AI
                      centred Start-Ups
                    </p>
                    <br></br>
                    <p>
                      Today, a lot of research has gone into solving global
                      challenges, at AICE we aim to contribute to this research
                      by focusing on how AI can contribute. We focus on carrying
                      out <span className="text-yellow">intensive research</span> in our research centres to come up
                      with solutions. Research and development will enable the
                      centre to <span className="text-yellow">investigate</span> and come up with <span className="text-yellow">top tier 
                      innovations.
                      </span>
                    </p>
                    <br></br>
                    <p>
                      Want to contribute to our drive for solution based AI
                      Research and Development?
                    </p>
                  </div>

                  <div className="w-4/12 mx-auto w-full">
                    <img
                      className="researchImg"
                      src={ResearchRepositoryBackgroundChart}
                      alt="Research and Development page graph"
                    />
                  </div>
                </div>
              </First>
            ) : toggleTab === 2 ? (
              <Second className="py-16">
                <div class="md:flex justify-center items-center grid gap-2">
                  <div class="md:w-3/12 w-10/12 mx-auto py-10">
                    <button className="bg-black text-second p-3">
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
                        <div className="flex items-center justify-between border-2 form-group mr-2 mt-2 mb-3">
                          <input
                            className="w-full px-2 outline-none bg-transparent py-2"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2  mr-2 mt-2 mb-3">
                          <input
                            className="w-full px-2 outline-none py-2 bg-transparent"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-3">
                          <input
                            className="w-full px-2 outline-none py-2 bg-transparent"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-3">
                          <input
                            className="w-full px-2 outline-none py-2 bg-transparent"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-4xl bg-black text-yellow px-2" />
                        </div>
                      </div>

                      <button className="flex items-center font-semibold bg-yellow p-3">
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

                  <div class="py-10 md:w-8/12 w-11/12 mx-auto">
                    <div class="md:flex mb-6">
                      <div className="border-2 border-black flex items-center mt-4 py-2 pl-2 h-12 gap-1 mr-6 md:w-3/4 w-full">
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
                        <button className="bg-black text-yellow py-2 h-12 font-semibold px-4">
                          SEARCH
                        </button>
                      </div>
                      <div class="flex flex-row md:w-1/4 w-full mt-4">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                        >
                          <strong>Sort By</strong>
                        </label>
                        <select
                          id="countries"
                          className="bg-transparent border-1 border-black focus:outline-none text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Relevance</option>
                        </select>
                      </div>
                    </div>

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
              <Third className="py-12">
                <div class="md:flex justify-between px-4">
                  <div class="md:w-3/12 w-full mx-auto mt-10">
                    <button className="bg-black text-second p-3 text-center">
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
                      ADD TO REPOSITORY
                    </button>

                    <div class="mt-4 mb-5">
                      <p>
                        <strong>Filters</strong>
                      </p>

                      <div class="content-start">
                        <div className="flex items-center gap-2 border-2 form-group mr-2 mt-2 mb-2">
                          <input
                            className="w-full pl-2 outline-none py-2 bg-transparent"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 form-group mr-2 mt-2 mb-2">
                          <input
                            className="w-full pl-2 outline-none bg-transparent"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-2">
                          <input
                            className="w-full pl-2 outline-none bg-transparent"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-2">
                          <input
                            className="w-full pl-2 outline-none bg-transparent"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-4xl bg-black text-yellow px-2" />
                        </div>
                      </div>

                      <button className="mt-10 flex items-center font-semibold bg-yellow p-3">
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

                  <div className="md:w-8/12 w-full mx-auto mt-10">
                    <div className="md:flex flex-row mb-6">
                      <div className="border-2 border-black flex items-center mt-4 pl-2 py-2 h-12 gap-1 mr-6 md:w-3/4 w-full">
                        <img
                          className="w-5 mt-1 h-auto messageIcon"
                          src={SearchIcon}
                          alt="search icon"
                        />
                        <input
                          type="text"
                          className="w-full outline-none bg-inherit border-none subscribe bg-transparent"
                          placeholder="Search"
                        />
                        <button className="bg-black text-yellow py-2 h-12 font-semibold px-4">
                          SEARCH
                        </button>
                      </div>
                      <div class="flex flex-row md:w-1/4 w-full mt-4">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                        >
                          <strong>Sort By</strong>
                        </label>
                        <select
                          id="countries"
                          className="bg-transparent border-1 border-black focus:outline-none text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Relevance</option>
                        </select>
                      </div>
                    </div>

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
              <Fourth className="py-12">
                <div class="md:flex items-center justify-center px-4">
                  <div class="md:w-3/12 w-full mx-auto mt-10">
                    <button className="bg-black text-second p-3 text-center">
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
                        <div className="flex items-center gap-2 border-2 form-group mr-2 mt-2 mb-2">
                          <input
                            className="w-full px-2 outline-none bg-transparent py-2"
                            placeholder="From Date"
                            name="fromDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 form-group mr-2 mt-2 mb-2">
                          <input
                            className="w-full px-2 outline-none bg-transparent py-2"
                            placeholder="To Date"
                            name="toDate"
                          />
                          <AiOutlineCalendar className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-2">
                          <input
                            className="w-full px-2 outline-none bg-transparent py-2"
                            placeholder="Author"
                            name="author"
                          />
                          <BsPersonFill className="text-4xl bg-black text-yellow px-2" />
                        </div>
                        <div className="flex items-center gap-2 border-2 mr-2 mt-2 mb-2">
                          <input
                            className="w-full px-2 outline-none bg-transparent py-2"
                            placeholder="Keyword"
                            name="keyword"
                          />
                          <FaAsterisk className="text-4xl bg-black text-yellow px-2" />
                        </div>
                      </div>

                      <button class="mt-10 p-3 font-semibold bg-yellow flex items-center">
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

                  <div class="md:w-8/12 w-full mx-auto mt-10">
                    <div class="md:flex flex-row mb-6">
                      <div className="border-2 border-black flex items-center mt-4 py-2 pl-2 w-80 h-12 gap-1 mr-6 md:w-3/4 w-full">
                        <img
                          className="w-5 mt-1 h-auto messageIcon"
                          src={SearchIcon}
                          alt="search icon"
                        />
                        <input
                          type="text"
                          className="w-full outline-none border-none subscribe bg-transparent py-2"
                          placeholder="Search"
                        />
                        <button className="bg-black text-yellow px-4 font-semibold h-12">
                          SEARCH
                        </button>
                      </div>
                      <div class="flex flex-row md:w-1/4 w-full mt-4">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 mr-6"
                        >
                          <strong>Sort By</strong>
                        </label>
                        <select
                          id="countries"
                          class="bg-transparent border-1 border-black block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Relevance</option>
                        </select>
                      </div>
                    </div>

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
            <div className="px-20">
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
  background: url("https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 0;
  height: 80vh;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0.9;
    z-index: -1;
  }
`;

const Second = styled.div`
  background: url("https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80");
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
    background-color: #ffffff;
    opacity: 0.9;
    z-index: -1;
  }
`;

const Third = styled.div`
  background: url("https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80");
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
    background-color: #ffffff;
    opacity: 0.9;
    z-index: -1;
  }
`;

const Fourth = styled.div`
  background: url("https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80");
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
    background-color: #ffffff;
    opacity: 0.9;
    z-index: -1;
  }
`;

const ProjectsWrapper = styled.section`
  background-image: url(${HeroBackground});
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
    opacity: 0.5;
    z-index: -1;
  }
`;

const RegisterWrapper = styled.section`
  background-image: url(${HeroBackground});
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

export default Research;