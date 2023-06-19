const router = require("express").Router();
const controller = require("../controllers/user");
router.get("/", controller.all);
router.post("/", controller.add);
module.exports = router;
