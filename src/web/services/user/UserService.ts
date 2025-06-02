import User from "../../repositories/user/User";

export class UserService {
  async getUser(userId: string): Promise<any> {
    try {
      return await User.get(userId);
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
  async getAllUsers(): Promise<any[]> {
    try {
      return await User.getAll();
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  }
  async updateUser(userId: string, userData: any): Promise<any> {
    try {
      return await User.update(userId, userData);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<any> {
    try {
      return await User.delete(userId);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}
