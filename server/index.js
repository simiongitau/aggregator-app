const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/user");
const companyRoute = require("./routes/company");
mongoose
  .connect("mongodb://localhost:27017/aggregator")
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(companyRoute);

app.listen(8000, () => console.log("server running at port 8000"));
