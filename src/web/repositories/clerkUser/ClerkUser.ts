import { StatusCodes } from "../../../types";
import { ServerError } from "../../../utils";
import ClerkUserModel from "../../models/clerkUser/UserModel";

class ClerkUser {
  async create(userData: any): Promise<any> {
    try {
      const user = await ClerkUserModel.create(userData);
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
        message: "Failed to Create user",
      });
    }
  }

  async update(userData: any): Promise<any> {
    try {
      const user = await ClerkUserModel.findOneAndUpdate(
        { userId: userData.userId },
        userData,
        { new: true, upsert: true }
      );
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

  async delete(userId: any): Promise<any> {
    try {
      await ClerkUserModel.findOneAndDelete({ userId });
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

export default new ClerkUser();
