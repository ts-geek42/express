import { TransformUser } from "../../../helpers/webhooks";
import ClerkUser from "../../repositories/clerkUser/ClerkUser";

export class WebhooksService {
  async createUser(userData: any): Promise<any> {
    try {
      const user = await ClerkUser.create(TransformUser(userData));
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async updateUser(userData: any): Promise<any> {
    try {
      const user = await ClerkUser.update(TransformUser(userData));
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async deleteUser(userData: any): Promise<any> {
    try {
      const userId = userData?.id;

      await ClerkUser.delete(userId);
      return { message: "User deleted successfully" };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}
