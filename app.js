import express from "express";
import routes from "./routes";
import globalRouter from "./Router/globalRouter";
import { localMiddleware } from "./middleware";
import passport from "passport";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import flash from "express-flash";
import helmet from "helmet";
import logger from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import "./passport";
import musicRouter from "./Router/musicRouter";
import musicChartTopRouter from "./Router/musicChartTopRouter";
import adminRouter from "./Router/adminRouter";
import userRouter from "./Router/userRouter";
const app = express();

const CokieStore = MySQLStore(session);

app.set("view engine", "pug");
app.use(helmet());
app.use("/static", express.static("static"));
app.use("/images", express.static("images"));
app.use("/music/images", express.static("images"));
app.use("/music/chart/images", express.static("images"));
app.use("/uploads", express.static("uploads"));
app.use("/music/uploads", express.static("uploads"));
app.use("/music/chart/uploads", express.static("uploads"));
app.use("/music/newest/uploads", express.static("uploads"));
app.use("/music/genre/uploads", express.static("uploads"));
app.use("/music/genre/korea/uploads", express.static("uploads"));
app.use("/music/chart/top/uploads", express.static("uploads"));
app.use("/music/chart/top/rise/uploads", express.static("uploads"));
app.use("/admin/uploads", express.static("uploads"));
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.STORE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
      host: "localhost",
      port: 3306,
      user: "root",
      password: process.env.DB_PASSWORD,
      database: "test"
    })
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.music, musicRouter);
app.use(`/music${routes.chart}`, musicChartTopRouter);
app.use(routes.administrator, adminRouter);

export default app;
