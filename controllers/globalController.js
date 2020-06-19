import routes from "../routes";
import { Music } from "../db";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();

export const home = async (req, res) => {
  const musics = await Music.findAll({ limit: 10, order: [["views", "desc"]] });
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  const newestMusic = await Music.findAll({
    where: { time: String(today) },
    order: [["views", "desc"]]
  });
  if (req.user) {
    const { dataValues: kakaoUser } = req.user;
    if (music) {
      try {
        res.render("./pages/global/home", {
          mainTitle: "Melon::음악이 필요한 시간",
          kakaoUser,
          music,
          newestMusic
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const { dataValues: kakaoUser } = req.user;
      try {
        res.render("./pages/global/home", {
          mainTitle: "Melon::음악이 필요한 시간",
          kakaoUser,
          newestMusic
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    if (music) {
      res.render("./pages/global/home", {
        mainTitle: "Melon::음악이 필요한 시간",
        music,
        newestMusic
      });
    } else {
      throw Error();
    }
  }
};

export const search = async (req, res) => {
  const {
    query: { term }
  } = req;
  let music = [];
  try {
    music = await Music.findAll({
      where: { title: term },
      order: [["title", "desc"]]
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
  res.render("./pages/global/search", {
    mainTitle: "Melon::음악이 필요한 시간",
    term,
    music
  });
};

export const sign = (req, res) => {
  res.render("./pages/global/sign", { mainTitle: "카카오 계정" });
};

export const loginForm = (req, res) => {
  res.render("./pages/global/loginForm", {
    mainTitle: "Melon::음악이 필요한 시간"
  });
};

export const login = (req, res) => {
  res.render("./pages/global/login", {
    mainTitle: "Melon::음악이 필요한 시간"
  });
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
