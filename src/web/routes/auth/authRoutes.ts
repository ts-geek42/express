import { Router } from "express";
import { AuthController } from "../../controllers/auth";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/signup", authController.signup.bind(authController));
authRoutes.post("/login", authController.login.bind(authController));

export default authRoutes;
