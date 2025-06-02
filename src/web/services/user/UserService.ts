import User from "../../repositories/user/User";

export class UserService {
  async getUser(userId: string): Promise<any> {
    return await User.get(userId);
  }
  async getAllUsers(): Promise<any[]> {
    return await User.getAll();
  }
  async updateUser(userId: string, userData: any): Promise<any> {
    return await User.update(userId, userData);
  }

  async deleteUser(userId: string): Promise<any> {
    return await User.delete(userId);
  }
}
