import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col  ">
      {/* div contact us */}
      <span className="ml-[40%] font-light text-xl font-serif mt-4">
        Contact us through
      </span>
      <div className="flex justify-between items-center font-serif text-white cursor-pointer">
        <ul className="flex flex-col pl-32 text-lg space-y-1">
          <li>0798323870</li>
          <li>aggphones135@yahoo.com</li>
          <li>p.o box 100 Nairobi</li>
        </ul>

        {/* div icons */}
        <div className="flex flex-col justify-center items-center pr-9 text-white pb-4 font-serif cursor-pointer">
          <span className="font-normal my-2 text-lg">social media</span>
          <span className="font-light text-lg">
            <i className="bi bi-facebook"></i> facebook
          </span>
          <span className="font-light text-lg mr-2">
            {" "}
            <i className="bi bi-linkedin"></i> linkedin
          </span>
          <span className="font-light text-lg">
            {" "}
            <i className="bi bi-instagram"></i>instagram
          </span>
          <span className="font-light text-lg mr-4">
            <i class="bi bi-twitter"></i> twitter
          </span>
        </div>
      </div>
    </div>
  );
}
