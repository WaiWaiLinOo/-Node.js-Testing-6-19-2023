const db = require('../models/post');
const all = async(req,res,next)=>{
    let data = await db.find();
    res.status(200).send({ data: data });
}

const add = async(req,res,next)=>{
    console.log("data==========>", req.body);
    const input = req.body;
    let result = await new db(input).save();
    if (result) {
      res.status(200).send({ data: result, message: "Books Save Successfully" });
    } else {
      res.status(300).send("Fail");
    }
}

module.exports = {
    all,add
}