import React from "react";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";
import axios from "axios";
import backImg from "../assets/backG.png";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import Subscribe from './../components/Subscribe';

// BreadCrumbs
import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

// FORMIK
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Footer from "../components/Footer";

const Upload = () => {
  const uploadUrl =
    "https://aicenterofexcellence.herokuapp.com/upload_document/";
  const [loading, setLoading] = React.useState(false);

  const notify = () => toast.success("Details Uploaded successfully!");
  const errorfy = () => toast.error("Something went wrong");

  const initialValues = {
    title: "",
    key_words: "",
    fields: "",
    abstract: "",
    file: null,
  };

  const [formData, setFormData] = React.useState(initialValues);
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    setActive(!active);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();

    form_data.append("title", formData.title);
    form_data.append("key_words", formData.key_words);
    form_data.append("fields", formData.fields);
    form_data.append("abstract", formData.abstract);
    form_data.append("file", formData.file);

    setLoading(true);
    axios
      .post(uploadUrl, form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // const questions = res.data.split(" ")
        setResponse(res.data);
        // console.log(questions);
        setLoading(false);
        setFormData({
          title: "",
          key_words: "",
          fields: "",
          abstract: "",
          file: "",
        });
        notify();
        handleClickOpen();
      })
      .catch((err) => {
        console.log(err);
        errorfy();
      });
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  return (
    <>
      <Navbar
        // className="z-50"
        active={active}
        handleMenuClick={handleMenuClick}
      />
      <ToastContainer />
      <div className="mt-24 bg-yellow py-1">
        <Breadcrumbs separator={<FaAngleRight />}>
          <Link to="/">
            <IoIosHome className="text-xl text-black" />
          </Link>
          <Link to="/research-development" className="no-underline text-black">
            Research and Development
          </Link>
          <span className="text-black font-semibold cursor-default">
            Paper Submission
          </span>
        </Breadcrumbs>
      </div>
      <UploadImage className="z-2">
        <form
          onSubmit={handleSubmit}
          className="py-12 md:w-10/12 w-11/12 mx-auto"
        >
          <div className="md:flex items-center justify-around mx-auto md:my-5 my-4">
            <p className="md:w-2/12 font-semibold">Paper Title</p>
            <input
              className="md:w-10/12 w-full border-1 border-black focus:outline-none p-3"
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              placeholder="Paper Title"
            />
            {/* <ErrorMessage
              name="title"
              component="div"
              className="text-alertColor text-sm"
            /> */}
          </div>
          <div className="md:flex items-center justify-around mx-auto md:my-5 my-4">
            <p className="md:w-2/12 font-semibold">Keywords</p>
            <input
              className="md:w-10/12 w-full border-1 border-black focus:outline-none p-3"
              type="text"
              id="key_words"
              name="key_words"
              onChange={handleChange}
              placeholder="Keywords"
            />
            {/* <ErrorMessage
              name="key_words"
              component="div"
              className="text-alertColor text-sm"
            /> */}
          </div>
          <div className="md:flex items-center justify-around mx-auto md:my-5 my-4">
            <p className="md:w-2/12 font-semibold">Fields </p>
            <input
              className="md:w-10/12 w-full border-1 border-black focus:outline-none p-3"
              type="text"
              id="fields"
              name="fields"
              onChange={handleChange}
              placeholder="Fields"
            />
            {/* <ErrorMessage
              name="fields"
              component="div"
              className="text-alertColor text-sm"
            /> */}
          </div>
          <div className="md:flex items-center justify-around mx-auto md:my-5 my-4">
            <p className="md:w-2/12 font-semibold">Abstract</p>
            <input
              rows="4"
              className="md:w-10/12 w-full border-1 border-black focus:outline-none p-3"
              type="text"
              id="abstract"
              name="abstract"
              onChange={handleChange}
              placeholder="Abstract"
            />
            {/* <ErrorMessage
              name="abstract"
              component="div"
              className="text-alertColor text-sm"
            /> */}
          </div>
          <div className="md:flex items-center justify-around mx-auto md:my-5 my-4">
            <p className="md:w-2/12 font-semibold">File Upload</p>
            <div className="flex items-center md:w-10/12 w-full">
              <input
                className="w-full border-1 border-black focus:outline-none px-3 py-3 h-16"
                type="file"
                id="file"
                name="file"
                onChange={handleFile}
                placeholder="Fields"
              />
              <button
                type="submit"
                className="flex items-center justify-between bg-black py-2 px-3 uppercase text-yellow h-16"
              >
                <FiUpload className="mx-2" />
                Upload
                {loading && (
                  <span className="spinner-border ml-1 spinner-border-sm"></span>
                )}
              </button>
            </div>
          </div>
        </form>
      </UploadImage>
      <Subscribe />
      <Footer />
      <div>
        {open ? (
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
        ) : (
          ""
        )}

        <Dialog
          fullWidth
          maxWidth
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Answer the Following Questions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>Hello world</p>
              {response}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

const UploadImage = styled.div`
  background: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 1;
  height: 100vh;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0.92;
    z-index: -1;
  }
`;

export default Upload;
