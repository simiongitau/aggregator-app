const Company = require("../model/company");
// others
exports.getAllCompany = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const c = await Company.find();
  if (!c) {
    return res.status(404).json({
      success: false,
      message: "company does not exist",
    });
  }
  return res.json({ success: true, c });
};
// getting all the admin

exports.createCompany = async (req, res) => {
  const data = req.body;
  console.log(data);
  // const {name,url,location,country} = req.body;
  try {
    const co = new Company(data);
    console.log(co);
    await co.save();
    return res.status(200).json({ success: true, co });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateCompany = async (req, res, next) => {
  const { id } = req.body;
  console.log(id);
  // Verifying if role and id is present
  try {
    const co = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.json({ success: true, co });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.Deletecompany = async (req, res) => {
  const id = req.params.id;
  try {
    const co = await Company.findByIdAndDelete(id);
    if (!co) {
      return res.status(404).json({
        success: false,
        message: "company does not exist",
      });
    }
    return res.json({ success: true, co });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
