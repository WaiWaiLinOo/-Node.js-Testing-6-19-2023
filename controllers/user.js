const db = require("../models/user");

const all = async (req, res, next) => {
  let data = await db.find();
  res.status(200).send({ data: data });
};

const add = async (req, res, next) => {
  const input = req.body;
  let result = await new db(input).save();
  if (result) {
    res.status(200).send({ data: result, message: "User Save Successfullly" });
  } else {
    res.status(300).send("fail");
  }
};

module.exports = {
  all,
  add,
};
