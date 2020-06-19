import { Music } from "../db";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();
const newMonth = new Date(year, month + 1, 1).getTime();
const lastMonth = new Date(year, month, 1).getTime();

const ChartNavTitle = {
  t1: "멜론TOP100",
  t2: "주간 인기상",
  t3: "트렌드차트",
  t4: "스타일 차트"
};

export const musicChartTopDayRise = async (req, res) => {
  const musics = await Music.findAll({});
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  const newestMusic = await Music.findAll({ where: { time: String(today) } });
  console.log(newestMusic);
  res.render("./pages/music/chart/musicChartRiseDay", {
    navtitle1: ChartNavTitle.t1,
    navtitle2: ChartNavTitle.t2,
    navtitle3: ChartNavTitle.t3,
    navtitle4: ChartNavTitle.t4,
    sideMainTitle: "멜론TOP100",
    music,
    newestMusic
  });
};

export const musicChartTopWeekRise = async (req, res) => {
  const musics = await Music.findAll({});
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  res.render("./pages/music/chart/musicChartRiseWeek", {
    navtitle1: ChartNavTitle.t1,
    navtitle2: ChartNavTitle.t2,
    navtitle3: ChartNavTitle.t3,
    navtitle4: ChartNavTitle.t4,
    sideMainTitle: "멜론TOP100",
    music
  });
};

export const musicChartTopMonthRise = async (req, res) => {
  const musics = await Music.findAll({});
  let music = [];
  musics.forEach(item => music.push(item.dataValues));
  let musicTime = [];
  musics.forEach(item => musicTime.push(item.dataValues.time));
  res.render("./pages/music/chart/musicChartRiseMonth", {
    navtitle1: ChartNavTitle.t1,
    navtitle2: ChartNavTitle.t2,
    navtitle3: ChartNavTitle.t3,
    navtitle4: ChartNavTitle.t4,
    sideMainTitle: "멜론TOP100",
    music,
    newMonth,
    lastMonth,
    musicTime
  });
};
