import { Router } from "express";
import { UserController } from "../controllers/user";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.createUser.bind(userController));
userRoutes.get("/:id", userController.getUser.bind(userController));
userRoutes.get("/", userController.getAllUsers.bind(userController));
export default userRoutes;
