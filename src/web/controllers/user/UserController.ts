import { NextFunction } from "express";
import { UserService } from "../../services/user/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: any, res: any, next: NextFunction) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json({
        message: "User created successfully",
      });
    } catch (error) {
      next(error);
    }
  }
  async getUser(req: any, res: any, next: NextFunction) {
    try {
      const user = await this.userService.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
