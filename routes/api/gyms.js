const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.getGyms)
  .post(controller.createGym);

// router
//   .route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
