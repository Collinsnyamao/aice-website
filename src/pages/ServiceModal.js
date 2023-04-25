import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../redux/features/message";
import { serviceThunk } from "../redux/features/service";
import { useDispatch } from "react-redux";
import { MdRoomService } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ServiceModal() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const notify = () => toast.success("Request sent successfully!");

  const initialValues = {
    name: "",
    company: "",
    designation: "",
    service: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    company: Yup.string().required("This field is required!"),
    designation: Yup.string().required("This field is required!"),
    service: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
  });

  const handleSubmit = (formValue, helpers) => {
    const { name, company, designation, service, email } = formValue;
    setLoading(true);
    dispatch(serviceThunk({ name, company, designation, service, email }))
      .unwrap()
      .then((res) => {
        notify();
        console.log("Service sent successfully");
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
    <ToastContainer />
      <button
        style={{ background: "#5BF8FD" }}
        className="text-black font-semibold uppercase text-sm p-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center">
          <MdRoomService className="text-xl"/>
          request for a service
        </div>
      </button>
      {showModal ? (
        <>
          <div className=" mt-12 mx-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                <div className="flex text-3xl px-4 font-semibold cursor-pointer" onClick={()=> setShowModal(false)}>x</div>
                <div className="p-4">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form className="flex flex-col items-center justify-center">
                      <div>
                        <Field
                          className="px-2 w-80 mx-auto mb-3 border-2 border-black rounded h-12"
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
                          type="text"
                          name="company"
                          placeholder="company"
                        />
                        <ErrorMessage
                          name="company"
                          component="div"
                          className="text-yellow text-xs"
                        />
                      </div>
                      <div>
                        <Field
                          className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                          type="text"
                          name="designation"
                          placeholder="designation"
                        />
                        <ErrorMessage
                          name="designation"
                          component="div"
                          className="text-yellow text-xs"
                        />
                      </div>
                      <div>
                        <Field
                          className="px-2 w-80 mx-auto my-3 border-2 border-black rounded h-12"
                          type="text"
                          name="service"
                          placeholder="service"
                        />
                        <ErrorMessage
                          name="service"
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
                      <button
                        className="bg-black text-yellow  font-normal uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
