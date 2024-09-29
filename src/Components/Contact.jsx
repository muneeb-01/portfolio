import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");

  const notify = (alert) => {
    toast.error(alert, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const vaiidateForm = () => {
    if (firstName.length === 0) {
      notify("Enter First Name");
      return false;
    }
    if (LastName.length === 0) {
      notify("Enter Last Name");
      return false;
    }
    if (email.length === 0) {
      notify("Enter your Email");
      return false;
    }
    if (subject.length === 0) {
      notify("Enter subject");
      return false;
    }
    if (message.length === 0) {
      notify("Enter your message");
      return false;
    }
    return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (vaiidateForm()) {
      const formData = {
        firstName,
        LastName,
        email,
        subject,
        message,
      };
      emailjs
        .send(
          "service_cfo860q",
          "template_n89q845",
          formData,
          "fZU1hIOI--Xwc9CPw"
        )
        .then((response) => {
          toast.success("Email successfully sent!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          notify("Server did'nt responed.");
        });

      setLastName("");
      setfirstName("");
      setemail("");
      setMessage("");
      setsubject("");
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-zinc-900 py-[8vh] px-[3.2vw] max-sm:px-[2vw]">
      <ToastContainer />
      <div className="w-1/2 h-full flex flex-col justify-between text-white max-sm:hidden">
        <div>
          {["Excited", "to Work", "Together"].map((item, idx) => {
            return (
              <div key={idx} className="masker flex items-center">
                <h1 className="uppercase font-FOUNDERSGROTESK  tracking-tight leading-[6.6vw] text-[9vw]">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
        <h3 className="uppercase font-FOUNDERSGROTESK  tracking-tight leading-[6.6vw] text-[2.5vw] max-lg:text-[5vw] max-lg:pb-[4vw]">
          MUNEEB MUGHAL
        </h3>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center border-l-2 max-sm:w-full max-sm:border-none">
        <form
          onSubmit={handleOnSubmit}
          className="max-w-md max-sm:w-full max-sm:px-[3vw] mx-auto"
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                value={firstName}
                id="firstName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setfirstName(e.target.value)}
              />
              <label
                htmlFor="firstName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="LastName"
                id="LastName"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="LastName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Subject"
              id="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="textArea"
              id="textArea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block min-h-[20vh] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="text-black bg-[#CDEA68] font-NEUEMONTREAL focus:outline-none font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
