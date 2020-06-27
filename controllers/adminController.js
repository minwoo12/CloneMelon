import routes from "../routes";
import { Music, Video } from "../db";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();

export const admin = (req, res) => {
  const {
    user: { dataValues: kakao }
  } = req;
  try {
    if (kakao.email === "fhghzl112@naver.com") {
      res.render("./pages/admin/administrator");
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const adminAuth = (req, res) => {
  const {
    user: { dataValues: kakao }
  } = req;
  try {
    if (kakao.email === "fhghzl112@naver.com") {
      res.render("./pages/admin/adminAuth");
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postAdminAuth = (req, res) => {
  const {
    body: { adminPassword }
  } = req;
  try {
    if (adminPassword === String(1111)) {
      res.redirect(routes.administrator);
    } else {
      res.redirect(`/admin${routes.adminAuth}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const adminStat = async (req, res) => {
  const {
    user: { dataValues: kakao }
  } = req;
  try {
    let music = [];
    const musics = await Music.findAll({});
    const videos = await Video.findAll({});
    musics.forEach(item => music.push(item.dataValues));
    if (kakao.email === "fhghzl112@naver.com") {
      res.render("./pages/admin/adminStat", { music, videos });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const musicUpload = (req, res) => {
  const {
    user: { dataValues: kakao }
  } = req;
  try {
    if (kakao.email === "fhghzl112@naver.com") {
      res.render("./pages/admin/musicUpload");
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postMusicUpload = async (req, res) => {
  const {
    body: { title, description, artist, genre },
    files
  } = req;
  let filePath = [];
  files.forEach(item => filePath.push(item.path));
  try {
    await Music.create({
      image: filePath[0],
      fileUrl: filePath[1],
      title,
      genre,
      description,
      artist,
      time: today
    });
    res.redirect(routes.administrator);
  } catch (error) {
    console.log(error);
    res.redirect(`/admin${routes.musicUpload}`);
  }
};

export const videoUpload = (req, res) => {
  const {
    user: { dataValues: kakao }
  } = req;
  try {
    if (kakao.email === "fhghzl112@naver.com") {
      res.render("./pages/admin/videoUpload");
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postVideoUpload = async (req, res) => {
  const {
    body: { title, description, artist },
    file: { path }
  } = req;
  try {
    const video = await Video.create({
      fileUrl: path,
      title,
      description,
      artist,
      time: today
    });
    console.log(video);
    res.redirect(routes.administrator);
  } catch (error) {
    console.log(error);
    res.redirect(`/admin${routes.videoUpload}`);
  }
};
