import User from "../../repositories/user/User";

export class AuthService {
  async signup(userData: any): Promise<any> {
    try {
      const user = await User.signup(userData);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async login(userData: any): Promise<any> {
    try {
      const user = await User.login(userData);
      return user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
}
