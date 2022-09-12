import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
export default function Add({ setCondition, fetchadmin }) {
  //   method to add admin
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(email);
  const SendData = async () => {
    await axios
      ?.post("http://localhost:8000/user/createadmin", { email, password })
      .then(function (response) {
        toast.success("🦄 admin created!", {
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
        console.log(error);
        toast.error("🦄 fail to add wrong email formate!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    fetchadmin();
  };
  return (
    <>
      <form
        className="bg-green-100 w-[40%] h-[50%] flex flex-col p-4 items-center relative space-y-12 mt-[100px]"
        onSubmit={() => console.log("good")}
      >
        <div className="absolute right-0 text-red-600 cursor-pointer text-[2em] pr-2">
          <i
            className="bi bi-x-octagon-fill"
            onClick={() => setCondition(false)}
          ></i>
        </div>
        <span className="ml-[10%] uppercase">add administrator</span>
        <div className="  w-full space-y-5 pl-[5%]">
          <div className="w-full flex space-x-14 items-center justify-center">
            <span className="uppercase">email:</span>
            <input
              className="h-10 outline-none rounded pl-4 border-b-2 border-gray-400 hover:ring-4 cursor-pointer"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex  space-x-7 justify-center items-center ">
            <span className="uppercase">password</span>
            <input
              className="h-10 outline-none rounded pl-4 border-b-2 border-gray-400 hover:ring-4 cursor-pointer"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-[150px] p-2 bg-green-200 rounded "
          type="button"
          onClick={SendData}
        >
          submit
        </button>
        <ToastContainer />
      </form>
    </>
  );
}
