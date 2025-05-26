import UserModel from "../../models/UserModel";

export class UserService {
  async createUser(userData: any): Promise<any> {
    try {
      const user = await UserModel.create(userData);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}
