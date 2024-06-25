import { Router } from "express";
const router = Router();
const { translateRoute } = require("../controllers/controllers");

router.get("/translate", translateRoute);
module.exports = router;
