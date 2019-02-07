const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.getStops)
  .post(controller.createStop);


module.exports = router;
