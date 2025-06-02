import {
  comparePassword,
  generateAccessToken,
  hashPassword,
} from "../../../helpers/auth";
import { StatusCodes } from "../../../types";
import { ServerError } from "../../../utils";
import { UserTypes } from "../../models/user";
import UserModel from "../../models/user/UserModel";

class User {
  async signup(userData: any): Promise<any> {
    try {
      const isExist = await UserModel.findOne({ email: userData.email });
      if (isExist) {
        throw new Error("User with this email already exists");
      }

      userData.password = hashPassword(userData.password);
      const user = await UserModel.create(userData);
      if (!user) {
        throw new Error("Error creating user");
      }
      const token = generateAccessToken(`${user._id}`);
      return token;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to Create user",
      });
    }
  }

  async login(userData: UserTypes): Promise<any> {
    try {
      const user = await UserModel.findOne({
        email: userData.email,
      }).schemaLevelProjections(false);
      if (!user) {
        throw new Error("User with this email not exists");
      }
      const isValidUser = comparePassword(userData.password, user.password);
      if (!isValidUser) {
        throw new Error("Invalid credentials");
      }

      const token = generateAccessToken(`${user._id}`);
      return token;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to authenticate user",
      });
    }
  }

  async get(userId: string): Promise<any> {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to get user",
      });
    }
  }
  async getAll(): Promise<any[]> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to get users",
      });
    }
  }
  async update(userId: string, userData: any): Promise<any> {
    try {
      const user = await UserModel.findByIdAndUpdate(userId, userData, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to update user",
      });
    }
  }

  async delete(userId: string): Promise<any> {
    try {
      const user = await UserModel.findByIdAndDelete(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      if (error instanceof ServerError) {
        throw new ServerError({
          code: error.code,
          message: error.message,
        });
      }
      throw new ServerError({
        code: StatusCodes.BAD_REQUEST,
        message: "Failed to delete user",
      });
    }
  }
}

export default new User();
