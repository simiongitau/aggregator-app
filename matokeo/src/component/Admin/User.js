import React from "react";
import Add from "./Add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
const axios = require("axios");

export default function User() {
  const [condition, setCondition] = useState(false);

  const [Data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/user/getAdmin`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Handledelete = async (id) => {
    await axios
      .delete(`http://localhost:8000/user/deleteAdmin/${id}`)
      .then((response) => {
        toast.success("🦄 successful deleted!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error("🦄 delete fail", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    fetchData();
  };
  return (
    <div className="h-screen relative bg-[#cee7f8] ">
      <div className="flex  py-10  items-center justify-between h-[30px] px-4">
        <span className="font-bold text-lg uppercase">
          welcome administrator
        </span>
        <i
          className="bi bi-person-plus-fill p-3 text-center text-pink-200 cursor-pointer text-[4em]"
          onClick={() => setCondition(true)}
        ></i>
      </div>
      {condition === true ? (
        <div className="absolute w-[100%] bg-gray-50 h-screen top-0 flex justify-center">
          <Add setCondition={setCondition} fetchadmin={fetchData} />
        </div>
      ) : (
        ""
      )}
      <div>
        <table class="table-auto bg-yellow-200 md:w-[90%] md:mx-auto">
          <thead className="bg-gray-300 h-20 font-mono text-lg capitalize">
            <tr className="">
              <th className="text-center">email</th>
              <th className="text-start">password</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="font-serif">
            {Data?.map((data) => (
              <tr
                className="h-10 bg-white border-2 border-gray-200  cursor-pointer hover:bg-gray-100"
                key={data._id}
              >
                <td className="text-center">{data.email} </td>
                <td className="text-start">{data.password}</td>
                <td className="text-center">
                  <button
                    className="bg-red-500 p-2 rounded w-32 "
                    onClick={() => Handledelete(data._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}
