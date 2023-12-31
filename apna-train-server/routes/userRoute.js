import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/authController.js";
import {uploadMiddleware} from "../middlewares/upload.js";

const router = express.Router();



router.post("/signup",uploadMiddleware, signupController);
router.post("/login", loginController);



export default router;
