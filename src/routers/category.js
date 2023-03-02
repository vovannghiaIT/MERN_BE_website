import express from "express";

import * as categoryController from "../controllers/category";

const router = express.Router();

router.get("/all", categoryController.getCategoryAll);
router.post("/insert", categoryController.insertCategory);
router.put("/update", categoryController.updateCategory);
router.delete("/delete", categoryController.deleteCategory);

export default router;
