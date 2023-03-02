import express from "express";
import verifyToken from "../middlewares/verifyToken";
import * as currentController from "../controllers/current";

const router = express.Router();
router.use(verifyToken);
router.get("/get-current", currentController.getCurrent);

export default router;
