import express from "express";
import { handleGenerateShortUrl } from "../controllers/url.controllers.js";
import { handleRedirectToUrlById } from "../controllers/url.controllers.js";
import { handleAnalyticsById } from "../controllers/url.controllers.js";

const router = express.Router();

router.post("/" , handleGenerateShortUrl);
router.get("/:id", handleRedirectToUrlById);
router.get("/analytics/:id", handleAnalyticsById)

export default router;