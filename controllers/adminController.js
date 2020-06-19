import routes from "../routes";
import { Music, Video } from "../db";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();

export const admin = (req, res) => {
  res.render("./pages/admin/administrator");
};

export const adminAuth = (req, res) => {
  res.render("./pages/admin/adminAuth");
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

export const adminStat = (req, res) => {
  res.render("./pages/admin/adminStat");
};

export const musicUpload = (req, res) => {
  res.render("./pages/admin/musicUpload");
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
  res.render("./pages/admin/videoUpload");
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
