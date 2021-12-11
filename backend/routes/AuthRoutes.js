import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/AuthController.js";
import ProtectMiddleware from "../middlewares/ProtectMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getMe").get(ProtectMiddleware, getMe);

export default router;
