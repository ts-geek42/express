import { NextFunction } from "express";
import { StatusCodes } from "../../../types";
import { ServerError } from "../../../utils";
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
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email is required.",
        });
      }

      const data = await this.authService.signup(req.body);
      res.status(StatusCodes.CREATED).json({
        message: "User created successfully",
        data,
      });
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to create User.",
        })
      );
    }
  }

  async login(req: any, res: any, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email is required.",
        });
      }

      const data = await this.authService.login(req.body);
      if (!data) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Invalid credentials" });
      }
      res.status(StatusCodes.OK).json({
        message: "Login successful",
        data,
      });
    } catch (error) {
      if (error instanceof ServerError) return next(error);

      return next(
        new ServerError({
          code: StatusCodes.BAD_REQUEST,
          message: "Failed to authenticate.",
        })
      );
    }
  }
}
