const mongoose = require("mongoose");
const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      max: 100,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      max: 50,
    },
    location: {
      type: String,
      required: true,
      max: 50,
    },
    clear: { type: String, default: false },
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);
// model is used to store data in database
const Company = mongoose.model("Company", companySchema);
// exporting
module.exports = Company;
