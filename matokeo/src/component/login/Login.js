import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
const axios = require("axios");
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // method to handle submit
  const SubmitRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/user/login", { email, password })
      .then(function (response) {
        navigate("/admin");
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
      })
      .catch(function (error) {
        toast.error("🦄 incorrect credicial", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  console.log(email);
  return (
    <>
      <div className="bg-[#d2d0d9] h-[80vh] flex justify-center items-center">
        <form
          className="bg-[#d0d9d9]  w-[40%] h-[50%] p-5 rounded"
          onSubmit={SubmitRegister}
        >
          <span className="ml-[40%] font-bold capitalize text-xl">login</span>
          <div className="ml-[20%] flex flex-col  ">
            <span className="capitalize my-2">email</span>
            <input
              className="w-[70%] p-2  bg-gray-200 outline-none hover:ring-4 cursor-pointer"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className=" py-2 capitalize">password</span>
            <input
              className="p-2 w-[70%] outline-none bg-gray-200  hover:ring-4 cursor-pointer"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-green-300 p-[0.5em] w-[70%] rounded mt-[20px]"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      <div className="bg-[#b5bdbc] ">
        <Footer />
      </div>
    </>
  );
}
