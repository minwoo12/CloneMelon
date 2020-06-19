import express from "express";
import routes from "../routes";
import { me, myMusic } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.me, me);
userRouter.get(routes.myMusic, myMusic);

export default userRouter;
