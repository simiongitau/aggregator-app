import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const axios = require("axios");
export default function Registration() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [country, setCountry] = useState("");
  const [location, setlocation] = useState("");
  const [clear, setClear] = useState("false");
  const [message, setMg] = useState("");
  const SubmitRegister = async (e) => {
    e.preventDefault();

    await axios
      ?.post("http://localhost:8000/user/createCompany", {
        name,
        url,
        country,
        location,
        clear,
      })
      .then(function (response) {
        toast.success("🦄 successful registered", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(response);
        setMg(response.data.success);
      })
      .catch(function (error) {});
  };
  console.log(message);
  return (
    <>
      <div className="flex flex-col bg-[#d2d0d9]  h-full">
        <span className="ml-[40%] uppercase py-8 underline">
          only for company/website registration
        </span>
        <div className="flex p-8 rounded border-2 m-2">
          <div className=" w-[50%] opacity-2 relative">
            <img
              src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Mobile%20technology%20illustration%201_0.jpeg"
              alt="photooo"
              className="h-full object-cover"
            />
            <span className="font-serif text-[2.5em] text-indigo-300 absolute top-[60%] left-[20%]">
              welcome to aggregator.
            </span>
          </div>
          <form
            className="flex flex-col w-[50%] p-6 space-y-6 justify-center items-center"
            onSubmit={SubmitRegister}
          >
            <div className="flex space-x-4  w-full items-center">
              <span className="font-serif capitalize  w-[250px]">
                web/company name:
              </span>
              <input
                className="w-[100%] h-12 outline-none border-b-2
     border-gray-800 rounded bg-gray-100 cursor-pointer pl-4 hover:ring-2 font-mono"
                placeholder="enter company name"
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex space-x-4  w-full  items-center">
              <span className="font-serif capitalize w-[250px]">county:</span>
              <input
                className="w-[100%] h-12 outline-none border-b-2 
     border-gray-800 rounded bg-gray-100 cursor-pointer pl-4 hover:ring-2 font-mono"
                required
                type="text"
                placeholder="enter country name"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex space-x-4  w-full  items-center">
              <span className="font-serif capitalize w-[250px]">url:</span>
              <input
                className="w-[100%] h-12 outline-none border-b-2 
     border-gray-800 rounded bg-gray-100 cursor-pointer pl-4 hover:ring-2 font-mono"
                placeholder="enter company api url"
                required
                type="text"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="flex space-x-4  w-full  items-center">
              <span className="font-serif capitalize w-[250px]">location:</span>
              <input
                className="w-[100%] h-12 outline-none border-b-2 
     border-gray-800 rounded bg-gray-100 cursor-pointer pl-4 font-mono hover:ring-2"
                required
                placeholder="enter company location"
                type="text"
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
            <div className="flex space-x-4  w-full  items-center">
              <span className="font-serif capitalize w-[250px]">payment:</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWfadL5iAeEuVJJmuLr2-A5nnfxAQb93jZiRFwThq5dkzKIoEndyorY7dihqFQjrZlhc&usqp=CAU"
                alt="mpesa"
                className="w-[350px] h-[90px] object-cover"
              />
            </div>
            <div className=" space-x-[200px]">
              <button
                className="bg-[#b5bdbc] cursor-pointer p-[1em] w-[20em] rounded hover:bg-blue-100 ring-2"
                type="submit"
              >
                submit
              </button>
              <Link to="/">
                <span className="text-indigo-400 underline cursor-pointer">
                  <i className="bi bi-backspace"></i> back
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#b5bdbc] ">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
