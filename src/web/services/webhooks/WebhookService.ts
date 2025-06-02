import { TransformUser } from "../../../helpers/webhooks";
import ClerkUser from "../../repositories/clerkUser/ClerkUser";

export class WebhooksService {
  async createUser(userData: any): Promise<any> {
    return await ClerkUser.create(TransformUser(userData));
  }

  async updateUser(userData: any): Promise<any> {
    return await ClerkUser.update(TransformUser(userData));
  }

  async deleteUser(userData: any): Promise<any> {
    const userId = userData?.id;
    return await ClerkUser.delete(userId);
  }
}
