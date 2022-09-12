const express = require("express");
const router = express.Router();
const {
  getAllCompany,
  createCompany,
  updateCompany,
  Deletecompany,

  } = require("../controler/company");

  router.post("/user/createCompany",createCompany);
  router.get("/user/getCompany",getAllCompany);
  router.patch("/user/updateCompany/:id",updateCompany);
  router.delete("/user/deleteCompany/:id",Deletecompany);
  
  module.exports = router;