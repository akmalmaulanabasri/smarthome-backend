const express = require("express");
const router = express();
const IndexRouter = require("../controllers/IndexController");

router.get("/api/test", IndexRouter.index);
router.get("/api/iot", IndexRouter.iot);
module.exports = router;
