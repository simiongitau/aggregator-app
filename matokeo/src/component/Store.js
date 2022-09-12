import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const axios = require("axios");
export const MainStateContext = createContext();

const MainContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("simion");
  const [ID, setID] = useState("");
  const [d, setDta] = useState("");

  const [update, setUpdate] = useState({});
  let navigate = useNavigate();
  // console.log(loggedInUser)
  const Handleupdate = (data) => {
    console.log(data);
    data.e.preventDefault();
    console.log("HANDLE UPDATE,", data, update?._id);
    axios
      .patch(`http://localhost:8000/user/updateCompany/${update?._id}`, {
        name: data?.name,
        location: data?.location,
        url: data?.url,
        country: data?.country,
        total: data?.amount,
        clear: data?.clear,
      })
      .then((response) => {
        console.log(response);
        toast.success("🦄 update successful!", {
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
        console.log(error);
        toast.error("🦄 fail to update!", {
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
  return (
    <MainStateContext.Provider
      value={{
        user: loggedInUser,
        setUser: setLoggedInUser,
        id: ID,
        setUpid: setID,
        Handleupdate,
        final: d,
        setFinal: setDta,
        update,
        setUpdate,
      }}
    >
      {children}
    </MainStateContext.Provider>
  );
};

export default MainContext;
