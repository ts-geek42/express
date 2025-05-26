import { Router } from "express";
import { UserController } from "../controllers/user";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController?.createUser?.bind(userController));

export default userRoutes;
