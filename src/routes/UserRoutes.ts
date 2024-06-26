import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  userController.signup(req, res);
});
userRouter.post("/login", (req, res) => {
  userController.login(req, res);
});
export default userRouter;
