import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainStateContext } from "../Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
export default function Admin() {
  const { user, setUpdate } = useContext(MainStateContext);
  const { id, setUpid } = useContext(MainStateContext);
  console.log(id);
  console.log(user);
  // end of store
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/user/getCompany`)
      .then((response) => {
        console.log(response.data.c);
        setData(response.data.c);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Handledelete = async (id) => {
    toast.success("🦄 successful deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    await axios.delete(`http://localhost:8000/user/deleteCompany/${id}`);
    fetchData();
  };
  return (
    <div className="bg-[#cee7f8] space-y-4 pb-10 min-h-screen">
      {/* div logo */}
      <div className="flex justify-around p-6 border-b-2 border-gray-200">
        <span className="font-bold text-4xl text-blue-800 uppercase">
          dashboard
        </span>
        <Link to="/user">
          <button className="bg-green-300 p-[1.2em] uppercase">
            system users
          </button>
        </Link>
      </div>

      {/* div table */}
      <table class="table-auto md:w-[90%] md:mx-auto">
        <thead className="bg-gray-300 h-20">
          <tr className="font-medium capitalize">
            <th className="text-center">Date</th>
            <th className="text-start">website name</th>
            <th className="text-start">country</th>
            <th className="text-start">url</th>
            <th className="text-start">location</th>
            <th className="text-center">amount</th>
            <th className="text-start">clear/no</th>
            <th className="text-center">update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody className="font-serif">
          {Data.map((data) => (
            <tr
              className="h-10 bg-white border-2 border-gray-200  cursor-pointer hover:bg-gray-200"
              key={data._id}
            >
              <td>{new Date(data.updatedAt).toLocaleDateString()} </td>
              <td>{data.name}</td>
              <td>{data.country}</td>
              <td>{data.url}</td>
              <td>{data.location}</td>
              <td>{data.total}</td>
              <td>{data.clear}</td>
              <td className=" text-center">
                <Link to="/update">
                  <button
                    className="bg-green-500 p-2 rounded w-32 "
                    onClick={() => setUpdate(data)}
                  >
                    update
                  </button>
                </Link>
              </td>
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
      <ToastContainer />
    </div>
  );
}
