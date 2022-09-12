import React from "react";
import Data from "../../Data";
import Footer from "../footer/Footer";
export default function Product() {
  console.log(Data);
  return (
    <>
      <div className="p-4 bg-[#d2d0d9] ">
        {/* searching  */}
        <div className="relative">
          <input
            className="ml-[35%] w-[25%] p-[0.5em] bg-gray-200 font-extralight rounded-full outline-none
         pl-4  hover:ring-2 hover:ring-blue-400 cursor-pointer text-lg"
            placeholder="searching..."
          />
          <i className="bi bi-search absolute left-[57%] mt-3 text-xl"></i>
        </div>
        {/* section product */}
        <div className="p-4 grid md:grid-cols-4 gap-2">
          {/* single product */}
          {Data.map((product) => (
            <div
              className="bg-[#d0d9d9]  cursor-pointer shadow-md shadow-gray-1000   rounded-md flex flex-col items-center py-6 px-4 
           w-[350px] "
              key={product.id}
            >
              <span className="uppercase">{product.name}</span>
              <img
                src={product.image}
                alt="product ph"
                className="w-[170px] h-[150px] mt-2"
              />
              <p className="text-justify  my-1 font-thin text-black tracking-tight">
                A paraphrase is a restatement of the meaning of a text or
                passage using other words.
              </p>
              {/* price div */}
              <div className="flex text-[0.8em] justify-between  w-[100%] mt-4">
                <div className="flex justify-between gap-4 items-center">
                  <span className="uppercase">price:</span>{" "}
                  <h2 className="font-bold underline text-lg">
                    {product.price} ksh
                  </h2>
                </div>
                <span className="text-yellow-600 text-lg">
                  {product.compay}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#b5bdbc] ">
        <Footer />
      </div>
    </>
  );
}
