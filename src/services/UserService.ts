import AppDataSource from "../../data-source";
import * as bcrypt from "bcrypt";
import { User } from "../entities/User";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async signup(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      email: email,
      password: hashedPassword,
    });

    return await this.userRepository.save(newUser);
  }
}
