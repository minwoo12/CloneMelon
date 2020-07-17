import passport from "passport";
import routes from "./routes";
import { User } from "./db";

import KakaoStrategy from "passport-kakao";
import { kakaoLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: process.env.kakao__clientID,
      clientSecret: process.env.kakao__secret,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
