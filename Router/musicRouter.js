import express from "express";
import routes from "../routes";
import {
  newest,
  newestVideo,
  musicChartTrend,
  musicChartStyle,
  genre,
  genreAbroad,
  musicDetail,
  genreKoreaDance,
  genreKoreaRap,
  genreKoreaSoul,
  musicDelete
} from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get(routes.chartTrend, musicChartTrend);
musicRouter.get(routes.chartStyle, musicChartStyle);

musicRouter.get(routes.newest, newest);
musicRouter.get(routes.newestVideo, newestVideo);

musicRouter.get(routes.genre, genre);
musicRouter.get(routes.genreKoreaDance, genreKoreaDance);
musicRouter.get(routes.genreKoreaRap, genreKoreaRap);
musicRouter.get(routes.genreKoreaSoul, genreKoreaSoul);

musicRouter.get(routes.genreAbroad, genreAbroad);

musicRouter.get(routes.musicDetail(), musicDetail);

musicRouter.get(routes.musicDelete(), musicDelete);

export default musicRouter;
