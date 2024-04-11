import { UserService } from "../services/UserService";

export class UserController {
  private userService = new UserService();

  async signup(req: any, res: any) {
    const email = req.body.email;
    const password = req.body.password;
    const createUser = await this.userService.signup(email, password);

    if (createUser) {
      res.status(201).json({
        message: "User created successfully",
      });
    } else {
      res.status(400).json({
        message: "User already exists",
      });
    }
  }
}
