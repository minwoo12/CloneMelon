import express from "express";
import routes from "../routes";
import { me, myMusic } from "../controllers/userController";
import { onlyPrivate } from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.me, onlyPrivate, me);
userRouter.get(routes.myMusic, myMusic);

export default userRouter;
