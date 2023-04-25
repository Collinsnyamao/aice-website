import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../redux/features/message";
import { serviceThunk } from "../redux/features/service";
import { useDispatch } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { engineersThunk } from "../redux/features/engineers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdSend } from 'react-icons/md'

export default function EngineersModal() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const notify = () => toast.success("Application sent successfully!");

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    nationality: "",
    bio: "",
    python_proficiency: "",
    sql_proficiency: "",
    data_experience: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
    gender: Yup.string().required("This field is required!"),
    nationality: Yup.string().required("This field is required!"),
    bio: Yup.string().required("This field is required!"),
    python_proficiency: Yup.string().required("This field is required!"),
    sql_proficiency: Yup.string().required("This field is required!"),
    data_experience: Yup.string().required("This field is required!"),
  });

  const handleSubmit = (formValue, helpers) => {
    const {
      name,
      email,
      gender,
      nationality,
      bio,
      python_proficiency,
      sql_proficiency,
      data_experience,
    } = formValue;
    setLoading(true);
    dispatch(
      serviceThunk({
        name,
        email,
        gender,
        nationality,
        bio,
        python_proficiency,
        sql_proficiency,
        data_experience,
      })
    )
      .unwrap()
      .then((res) => {
        notify();
        helpers.resetForm();
        setLoading(false);
        setShowModal(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <button
        style={{ background: "#5BF8FD" }}
        className="text-black font-semibold text-sm p-2 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center uppercase">
          <MdSend className="text-xl" />
          Apply Now
        </div>
      </button>
      {showModal ? (
        <>
          <div className="mx-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                <div className="p-4">
                  <ToastContainer />
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="md:flex items-center justify-between">
                        <article className="m-4">
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="name"
                              placeholder="name"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="email"
                              name="email"
                              placeholder="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            {/* <select
                              id="countries"
                              className="h-12 border-2 border-black text-black text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select> */}
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="gender"
                              placeholder="gender"
                            />
                            <ErrorMessage
                              name="gender"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="nationality"
                              placeholder="nationality"
                            />
                            <ErrorMessage
                              name="nationality"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                        </article>
                        <article>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="bio"
                              placeholder="bio"
                            />
                            <ErrorMessage
                              name="bio"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="python_proficiency"
                              placeholder="proficiency"
                            />
                            <ErrorMessage
                              name="python_proficiency"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="sql_proficiency"
                              placeholder="sql"
                            />
                            <ErrorMessage
                              name="sql_proficiency"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                          <div>
                            <Field
                              className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                              type="text"
                              name="data_experience"
                              placeholder="data"
                            />
                            <ErrorMessage
                              name="data_experience"
                              component="div"
                              className="text-yellow text-xs"
                            />
                          </div>
                        </article>
                      </div>
                      <button
                        className="w-9/12 bg-black text-yellow  font-normal uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Submit
                        {loading && (
                          <span className="spinner-border ml-1 spinner-border-sm"></span>
                        )}
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
