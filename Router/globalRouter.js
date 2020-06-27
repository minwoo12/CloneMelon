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
import { onlyPublic, onlyPrivate } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.sign, onlyPublic, sign);

globalRouter.get(routes.loginForm, onlyPublic, loginForm);

globalRouter.get(routes.login, onlyPublic, login);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.kakao, kakaoLogin);

globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.loginForm }),
  postKakaoLogin
);

export default globalRouter;
