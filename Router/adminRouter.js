import express from "express";
import routes from "../routes";
import {
  admin,
  adminAuth,
  postAdminAuth,
  musicUpload,
  adminStat,
  postMusicUpload,
  videoUpload,
  postVideoUpload
} from "../controllers/adminController";
import { uploadMusic, uploadVideo } from "../middleware";

const adminRouter = express.Router();

adminRouter.get(routes.home, admin);

adminRouter.get(routes.adminAuth, adminAuth);

adminRouter.post(routes.adminAuth, postAdminAuth);

adminRouter.get(routes.adminStat, adminStat);

adminRouter.get(routes.musicUpload, musicUpload);

adminRouter.post(routes.musicUpload, uploadMusic, postMusicUpload);

adminRouter.get(routes.videoUpload, videoUpload);

adminRouter.post(routes.videoUpload, uploadVideo, postVideoUpload);

export default adminRouter;
