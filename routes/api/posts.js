const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.getPosts)
  .post(controller.createPost);

// router
//   .route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
