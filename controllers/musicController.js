import { Music, Video } from "../db";
import routes from "../routes";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();

const ChartNavTitle = {
  t1: "멜론TOP100",
  t3: "트렌드차트",
  t4: "스타일 차트"
};

const newestNavTitle = {
  t1: "최신곡",
  t2: "최신 앨범",
  t3: "최신 뮤직비디오"
};

const genreNavTitle = {
  t1: "한국대중음악",
  t2: "해외POP음악"
};

export const musicChartTrend = (req, res) => {
  req.flash("work", "작업중입니다.");
  res.render("./pages/music/chart/musicChartTrend", {
    navtitle1: ChartNavTitle.t1,
    navtitle3: ChartNavTitle.t3,
    navtitle4: ChartNavTitle.t4,
    sideMainTitle: "트렌드차트"
  });
};

export const musicChartStyle = async (req, res) => {
  req.flash("work", "작업중입니다.");
  const musics = await Music.findAll({});
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  res.render("./pages/music/chart/musicChartStyle", {
    navtitle1: ChartNavTitle.t1,
    navtitle3: ChartNavTitle.t3,
    navtitle4: ChartNavTitle.t4,
    sideMainTitle: "스타일 차트",
    music
  });
};

export const newest = async (req, res) => {
  const musics = await Music.findAll({});
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  const newestMusic = await Music.findAll({ where: { time: String(today) } });
  res.render("./pages/music/newest/musicNewest", {
    navtitle1: newestNavTitle.t1,
    navtitle3: newestNavTitle.t3,
    navtitle4: newestNavTitle.t4,
    sideMainTitle: "최신곡",
    music,
    newestMusic
  });
};

export const newestVideo = async (req, res) => {
  const videos = await Video.findAll({});
  res.render("./pages/music/newest/musicNewestVideo", {
    navtitle1: newestNavTitle.t1,
    navtitle3: newestNavTitle.t3,
    navtitle4: newestNavTitle.t4,
    sideMainTitle: "최신 뮤직비디오",
    videos
  });
};

export const genre = async (req, res) => {
  const music = await Music.findAll({ where: { genre: "발라드" } });
  res.render("./pages/music/genre/musicGenre", {
    navtitle1: genreNavTitle.t1,
    navtitle2: genreNavTitle.t2,
    sideMainTitle: "한국대중음악",
    music
  });
};

export const genreKoreaDance = async (req, res) => {
  const music = await Music.findAll({ where: { genre: "댄스" } });
  res.render("./pages/music/genre/musicGenreDance", {
    navtitle1: genreNavTitle.t1,
    navtitle2: genreNavTitle.t2,
    sideMainTitle: "한국대중음악",
    music
  });
};

export const genreKoreaRap = async (req, res) => {
  const music = await Music.findAll({ where: { genre: "랩/힙합" } });
  res.render("./pages/music/genre/musicGenreRap", {
    navtitle1: genreNavTitle.t1,
    navtitle2: genreNavTitle.t2,
    sideMainTitle: "한국대중음악",
    music
  });
};

export const genreKoreaSoul = async (req, res) => {
  const music = await Music.findAll({ where: { genre: "R&B/Soul" } });
  res.render("./pages/music/genre/musicGenreSoul", {
    navtitle1: genreNavTitle.t1,
    navtitle2: genreNavTitle.t2,
    sideMainTitle: "한국대중음악",
    music
  });
};

export const genreAbroad = (req, res) => {
  req.flash("work", "작업중입니다.");
  res.render("./pages/music/genre/musicGenreAbroad", {
    navtitle1: genreNavTitle.t1,
    navtitle2: genreNavTitle.t2,
    sideMainTitle: "해외POP음악"
  });
};

export const musicDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const music = await Music.findOne({ where: { id } });
    const musics = music.dataValues;
    await Music.update(
      { views: music.dataValues.views + 1 },
      { where: { id } }
    );
    res.render("./pages/music/musicDetail", { musics });
  } catch (error) {
    console.log(error);
  }
};

export const musicDelete = async (req, res) => {
  const {
    user,
    params: { id }
  } = req;
  try {
    if (req.user) {
      if (user.dataValues.email !== "fhghzl112@naver.com") {
        res.redirect(routes.musicDetail(id));
      } else {
        await Music.destroy({ where: { id } });
        res.redirect(routes.home);
      }
    } else {
      res.redirect(routes.musicDetail(id));
    }
  } catch (error) {
    console.log(error);
  }
};
