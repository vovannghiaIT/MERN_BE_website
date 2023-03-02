import express from "express";

import * as userController from "../controllers/user";

const router = express.Router();

router.get("/all", userController.getUserAll);
router.post("/insert", userController.insertUser);
router.post("/inserthash", userController.insertUserHash);
router.put("/update", userController.updateUser);
router.put("/updatehash", userController.updateUserHash);
router.delete("/delete", userController.deleteUser);

export default router;
