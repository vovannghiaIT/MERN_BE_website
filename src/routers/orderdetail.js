import express from "express";

import * as orderdetailController from "../controllers/orderdetail";

const router = express.Router();

router.get("/all", orderdetailController.getOrderDetailAll);
router.post("/insert", orderdetailController.insertOrderDetail);
router.put("/update", orderdetailController.updateOrderDetail);
router.delete("/delete", orderdetailController.deleteOrderDetail);

export default router;
