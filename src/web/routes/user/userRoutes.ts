import { Router } from "express";
import { UserController } from "../../controllers/user";
import { authenticateUser } from "../../middlewares";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/:id", userController.getUser.bind(userController));
userRoutes.get("/", userController.getAllUsers.bind(userController));
userRoutes.put(
  "/:id",
  authenticateUser,
  userController.updateUser.bind(userController)
);
userRoutes.delete(
  "/:id",
  authenticateUser,
  userController.deleteUser.bind(userController)
);
export default userRoutes;
