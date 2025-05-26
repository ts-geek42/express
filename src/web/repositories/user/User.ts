import UserModel from "../../models/user/UserModel";

class User {
  async create(userData: any): Promise<any> {
    try {
      const user = await UserModel.create(userData);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  async get(userId: string): Promise<any> {
    try {
      const user = await UserModel.findById(userId);
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
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async delete(userId: string): Promise<any> {
    try {
      const user = await UserModel.findByIdAndDelete(userId);
      return user;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

export default new User();
