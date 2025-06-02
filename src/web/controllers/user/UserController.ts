import { NextFunction } from "express";
import { UserService } from "../../services/user/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUser(req: any, res: any, next: NextFunction) {
    try {
      const { id: userId } = req.params;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const user = await this.userService.getUser(userId);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req: any, res: any, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: any, res: any, next: NextFunction) {
    try {
      const { id: userId } = req.params;

      if (!userId) {
        throw new Error("User ID is required");
      }

      await this.userService.updateUser(userId, req.body);

      return res.status(200).json({
        message: "User updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: any, res: any, next: NextFunction) {
    try {
      const { id: userId } = req.params;

      if (!userId) {
        throw new Error("User ID is required");
      }

      await this.userService.deleteUser(userId);

      return res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
