import { NextFunction } from "express";
import { AuthService } from "../../services/auth";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async signup(req: any, res: any, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          message: "Email is required.",
        });
      }

      const data = await this.authService.signup(req.body);
      res.status(201).json({
        message: "User created successfully",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: any, res: any, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          message: "Email is required.",
        });
      }

      const data = await this.authService.login(req.body);
      if (!data) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.status(200).json({
        message: "Login successful",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}
