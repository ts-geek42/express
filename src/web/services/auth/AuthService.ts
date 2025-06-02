import User from "../../repositories/user/User";

export class AuthService {
  async signup(userData: any): Promise<any> {
    return await User.signup(userData);
  }

  async login(userData: any): Promise<any> {
    return await User.login(userData);
  }
}
