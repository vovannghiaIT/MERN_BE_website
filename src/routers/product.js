import express from "express";

import * as productController from "../controllers/product";

const router = express.Router();

router.get("/all", productController.getProductAll);
router.post("/insert", productController.insertProduct);
router.put("/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);
router.get("/detail/:slug", productController.getDetailProduct);

export default router;
