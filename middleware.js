import routes from "./routes";
import multer from "multer";

const multerMusic = multer({ dest: "uploads/musics" });
const multerVideo = multer({ dest: "uploads/videos" });

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  res.locals.today = today;
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const uploadMusic = multerMusic.array("musicFile", 2);
export const uploadVideo = multerVideo.single("videoFile");
