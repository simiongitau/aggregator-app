const express = require("express");
const router = express.Router();
const {
    login,
    getAlladmin,
    createUser,
    updateUser,
    DeleteUser,
  } = require("../controler/user");

  router.post("/user/login", login);
  router.post("/user/createadmin", createUser);
  router.get("/user/getAdmin",getAlladmin);
  router.delete("/user/deleteAdmin/:id",DeleteUser);
  router.patch("/user/updateAdmin/:id",updateUser);

  module.exports = router; 