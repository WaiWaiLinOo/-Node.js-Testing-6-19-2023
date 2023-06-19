const router = require('express').Router();
const controller = require('../controllers/post')
router.get('/',controller.all);
router.post('/',controller.add);
module.exports = router