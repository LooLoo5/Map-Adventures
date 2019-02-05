const router = require("express").Router();
const gymRoutes = require("./gyms");
const raidRoutes = require("./raids");
const postRoutes = require("./posts");

router.use("/gyms", gymRoutes);
router.use("/raids", raidRoutes);
router.use("/posts", postRoutes);

module.exports = router;
