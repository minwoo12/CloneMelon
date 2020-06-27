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
import { uploadMusic, uploadVideo, onlyPrivate } from "../middleware";

const adminRouter = express.Router();

adminRouter.get(routes.home, onlyPrivate, admin);

adminRouter.get(routes.adminAuth, onlyPrivate, adminAuth);

adminRouter.post(routes.adminAuth, onlyPrivate, postAdminAuth);

adminRouter.get(routes.adminStat, onlyPrivate, adminStat);

adminRouter.get(routes.musicUpload, onlyPrivate, musicUpload);

adminRouter.post(routes.musicUpload, onlyPrivate, uploadMusic, postMusicUpload);

adminRouter.get(routes.videoUpload, onlyPrivate, videoUpload);

adminRouter.post(routes.videoUpload, onlyPrivate, uploadVideo, postVideoUpload);

export default adminRouter;
