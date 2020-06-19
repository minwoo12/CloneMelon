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
      clientID: "cb18aa3d7e36892938d42f58a8819843",
      clientSecret: "kAOZeYa4EzLZlZT2mnyFiAXAYoO69haL",
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
