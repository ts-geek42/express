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
}
