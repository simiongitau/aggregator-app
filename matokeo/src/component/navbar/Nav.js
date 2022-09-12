import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="bg-[#b5bdbc] flex justify-between items-center p-4 shadow-md shadow-gray-400 h-[7em]">
      <span className="text-3xl uppercase font-mono ">aggregator</span>
      <ul className="flex space-x-4">
        <Link to="/">
          <li
            className="border-b-2 px-[0.9em] py-[0.3em] cursor-pointer uppercase text-lg font-light rounded
  hover:bg-green-100"
          >
            home
          </li>
        </Link>
        <li className="px-[0.9em] border-b-2 py-[0.3em] cursor-pointer uppercase text-lg font-light rounded  hover:bg-green-100">
          about us
        </li>
      </ul>
      <div className="">
        <button className="peer px-5 py-2 text-lg rounded hover:bg-gray-100 uppercase border-b-2">
          category
        </button>
        <div
          className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg font-light text-sm border-t-4 border-green-200 absolute right-2"
        >
          <Link
            to="/login"
            className="px-5 py-3 hover:bg-gray-200 border-b-2 border-gray-500"
          >
            Admin
          </Link>
          <Link to="/register" className="px-5 py-3 hover:bg-gray-200">
            registration
          </Link>
        </div>
      </div>
    </div>
  );
}
