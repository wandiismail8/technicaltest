const controller = require("../controllers/controller");

const router = require("express").Router();

router.post("/counter", controller.addCounter);
router.post("/login", controller.login )

module.exports = router;
