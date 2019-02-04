const router = require("express").Router();
const gymRoutes = require("./gyms");
const raidRoutes = require("./raids");

router.use("/gyms", gymRoutes);
router.use("/raids", raidRoutes);

module.exports = router;
