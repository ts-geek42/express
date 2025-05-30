import ClerkUserModel from "../../models/clerkUser/UserModel";

class ClerkUser {
  async create(userData: any): Promise<any> {
    try {
      const user = await ClerkUserModel.create(userData);
      return user;
    } catch (error) {
      console.error("Error creating Clerk user:", error);
      throw error;
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
      console.error("Error updating Clerk user:", error);
      throw error;
    }
  }

  async delete(userId: any): Promise<any> {
    try {
      await ClerkUserModel.findOneAndDelete({ userId });
    } catch (error) {
      console.error("Error deleting Clerk user:", error);
      throw error;
    }
  }
}

export default new ClerkUser();
