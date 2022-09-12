// import logo from './logo.svg';
import "./App.css";
import Product from "./component/product/Product";
import Login from "./component/login/Login";
import Nav from "./component/navbar/Nav";
import Admin from "./component/Admin/Admin";
import User from "./component/Admin/User";
import Registration from "./component/Registration/Registration";
import Update from "./component/Admin/Update";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="sticky z-10 top-0">
          <Nav />
        </div>
        <Routes>
          <Route exact path="/" element={<Product />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/user" element={<User />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
