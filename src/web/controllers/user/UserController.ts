import { NextFunction } from "express";
import { StatusCodes } from "../../../types";
import { ServerError } from "../../../utils";
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
      return res.status(StatusCodes.OK).json(user);
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to get user.",
        })
      );
    }
  }

  async getAllUsers(req: any, res: any, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(StatusCodes.OK).json(users);
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to get all users.",
        })
      );
    }
  }

  async updateUser(req: any, res: any, next: NextFunction) {
    try {
      const { id: userId } = req.params;

      if (!userId) {
        throw new Error("User ID is required");
      }

      await this.userService.updateUser(userId, req.body);

      return res.status(StatusCodes.OK).json({
        message: "User updated successfully",
      });
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to update user.",
        })
      );
    }
  }

  async deleteUser(req: any, res: any, next: NextFunction) {
    try {
      const { id: userId } = req.params;

      if (!userId) {
        throw new Error("User ID is required");
      }

      await this.userService.deleteUser(userId);

      return res.status(StatusCodes.OK).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to delete user.",
        })
      );
    }
  }
}
