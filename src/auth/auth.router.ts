import { Router } from "express";
import AuthController from "./auth.controller";

const authRouter:Router = Router();
const authController = new AuthController();

authRouter.post("/login", authController.verificToken, authController.login);

export default authRouter;
