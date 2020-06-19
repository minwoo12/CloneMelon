import express from "express";
import routes from "../routes";
import {
  musicChartTopRise,
  musicChartTopDayRise,
  musicChartTopWeekRise,
  musicChartTopMonthRise
} from "../controllers/musicChartTopController";

const musicChartTopRouter = express.Router();

musicChartTopRouter.get(routes.chartDayRise, musicChartTopDayRise);
musicChartTopRouter.get(routes.chartWeekRise, musicChartTopWeekRise);
musicChartTopRouter.get(routes.chartMonthRise, musicChartTopMonthRise);

export default musicChartTopRouter;
