import React, { useContext, useEffect, useState } from "react";
import { MainStateContext } from "../Store";
import { ToastContainer } from "react-toastify";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
export default function Update() {
  const { update, Handleupdate } = useContext(MainStateContext);
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [location, setlocation] = useState();
  const [country, setcountry] = useState();
  const [amount, setAmount] = useState();
  const [clear, setClear] = useState();
  console.log(clear);

  useEffect(() => {
    setName(update?.name);
    setUrl(update?.url);
    setlocation(update?.location);
    setcountry(update?.country);
  }, [update]);

  return (
    <div className="flex justify-center overflow-hidden w-[100%] bg-[#cee7f8] h-[86vh]">
      {/* setting component */}
      <form
        className="grid grid-cols-2 gap-1 px-10 py-8  bg-[#d2d0d9]  w-[70%] mt-28 h-[50%]"
        onSubmit={(e) =>
          Handleupdate({ name, url, location, country, amount, clear, e })
        }
      >
        {/* first div */}
        <div className="space-y-8 flex justify-center flex-col">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="company name"
                style={{ transform: "uppercase", font: "thin" }}
              />
            </div>
            <div className="">
              <TextInput
                id="email1"
                type="text"
                style={{ width: "50%" }}
                placeholder="mawega company"
                required={true}
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="country" />
            </div>
            <div className="w-[50%]">
              <TextInput
                id="email1"
                type="text"
                placeholder="Rwanda"
                required={true}
                // value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="location" />
            </div>
            <div className="w-[50%]">
              <TextInput
                id="email1"
                type="text"
                placeholder="mawere"
                required={true}
                // value={location}
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* end of div */}
        <div className="space-y-8 flex justify-center flex-col">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="url" />
            </div>
            <div className="w-[50%]">
              <TextInput
                id="email1"
                type="text"
                placeholder="https://data/url/api/mawega"
                required={true}
                // value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="amount" />
            </div>
            <div className="w-[50%]">
              <TextInput
                id="email1"
                type="Number"
                placeholder="25,000"
                required={true}
                // value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" onChange={() => setClear(true)} />
            <Label htmlFor="remember">clear</Label>
          </div>
          <div className="flex items-center gap-10">
            <Button type="submit" className="w-full" style={{ width: "50%" }}>
              Submit
            </Button>
            <Link to="/admin">
              <span className="text-indigo-800 underline">Back</span>
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
