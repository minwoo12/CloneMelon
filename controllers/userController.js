import passport from "passport";
import routes from "../routes";
import { User } from "../db";

export const me = async (req, res) => {
  const {
    user: { dataValues: myUser }
  } = req;
  res.render("me", { myUser });
};

export const myMusic = (req, res) => {
  try {
    if (req.user) {
      req.flash("work", "작업중입니다.");
      res.render("myMusic");
    } else {
      res.redirect(routes.loginForm);
    }
  } catch (error) {
    console.log(error);
  }
};

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, done) => {
  const {
    _json: {
      id,
      properties: { nickname },
      kakao_account: { email }
    }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return done(null, user);
    } else {
      const newUser = await User.create({
        email,
        nickname,
        kakaoId: id
      });
      return done(null, newUser);
    }
  } catch (error) {
    return done(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};
