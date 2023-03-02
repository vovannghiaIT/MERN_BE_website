import express from "express";

import * as operaController from "../controllers/opera";

const router = express.Router();

router.get("/all", operaController.getOperaAll);
router.post("/insert", operaController.insertOpera);
router.put("/update", operaController.updateOpera);
router.delete("/delete", operaController.deleteOpera);

export default router;
