import {
  comparePassword,
  generateAccessToken,
  hashPassword,
} from "../../../helpers/auth";
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
      console.error("Error creating user:", error);
      throw error;
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
      console.error("Error logging in:", error);
      throw error;
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
      console.error("Error fetching user:", error);
      throw error;
    }
  }
  async getAll(): Promise<any[]> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
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
      console.error("Error updating user:", error);
      throw error;
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
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

export default new User();
