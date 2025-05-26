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
  async getUser(userId: string): Promise<any> {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
}
