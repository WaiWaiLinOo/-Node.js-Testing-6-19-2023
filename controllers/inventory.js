const db = require('../models/inventory');
const all= async(req,res,next) =>{
    let data =await db.find();
    if(data){
        res.status(200).send({data: data})
    }
}

module.exports = {
    all,
}