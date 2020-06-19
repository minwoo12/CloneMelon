import express from "express";
import routes from "../routes";
import {
  home,
  search,
  login,
  logout,
  sign,
  loginForm
} from "../controllers/globalController";
import { kakaoLogin, postKakaoLogin } from "../controllers/userController";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.sign, sign);

globalRouter.get(routes.loginForm, loginForm);

globalRouter.get(routes.login, login);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.kakao, kakaoLogin);

globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.loginForm }),
  postKakaoLogin
);

export default globalRouter;
