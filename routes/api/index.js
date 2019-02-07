const router = require("express").Router();
const gymRoutes = require("./gyms");
const raidRoutes = require("./raids");
const postRoutes = require("./posts");
const stopRoutes = require("./stops");

router.use("/gyms", gymRoutes);
router.use("/raids", raidRoutes);
router.use("/posts", postRoutes);
router.use("/stops", stopRoutes);

module.exports = router;
