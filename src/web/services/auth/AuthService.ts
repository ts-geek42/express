import User from "../../repositories/user/User";

export class AuthService {
  async signup(userData: any): Promise<any> {
    try {
      return await User.signup(userData);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async login(userData: any): Promise<any> {
    try {
      return await User.login(userData);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
}
