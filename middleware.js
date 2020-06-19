import routes from "./routes";
import multer from "multer";

const multerMusic = multer({ dest: "uploads/musics" });
const multerVideo = multer({ dest: "uploads/videos" });

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const today = new Date(year, month, date).getTime();
const nineClock = new Date(year, month, date, 18);
const realTime2 = new Date(year, month, date, 12);
const realTime3 = new Date(year, month, date, 25);
const realTime4 = new Date(year, month, date, 2);
console.log(nineClock);
console.log(realTime2);
console.log(realTime3);
console.log(realTime4);

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  res.locals.today = today;
  next();
};

export const uploadMusic = multerMusic.array("musicFile", 2);
export const uploadVideo = multerMusic.single("videoFile");
