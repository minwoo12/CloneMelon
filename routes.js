const routes = {
  //global
  home: "/",
  search: "/search",
  sign: "/sign",
  loginForm: "/loginForm",
  login: "/login",
  logout: "/logout",
  //user
  user: "/user",
  me: "/me",
  myMusic: "/myMusic",
  userEdit: "/userEdit",
  changeNickname: "/changeNickname",
  withdraw: "/withdraw",
  //music
  music: "/music",
  musicDetail: id => {
    if (id) {
      return `/music/${id}`;
    } else {
      return "/:id";
    }
  },
  musicDelete: id => {
    if (id) {
      return `/music/${id}/delete`;
    } else {
      return "/:id/delete";
    }
  },

  //misic-chart
  //music-chart-top
  chart: "/chart/top",
  chartDayRise: "/rise/day",
  chartWeekRise: "/rise/week",
  chartMonthRise: "/rise/month",
  chartWeek: "/chart/week",

  //music-chart-trend
  chartTrend: "/chart/trend",
  chartStyle: "/chart/style",

  //misic-newest
  newest: "/newest/music",
  newestAlbum: "/newest/album",
  newestVideo: "/newest/video",

  //misic-genre
  genre: "/genre/korea",
  genreKoreaDance: "/genre/korea/dance",
  genreKoreaRap: "/genre/korea/rap",
  genreKoreaSoul: "/genre/korea/soul",
  genreAbroad: "/genre/abroad",

  //kakao
  kakao: "/oauth/kakao",
  kakaoCallback: "/oauth/kakao/callback",

  //administrator
  administrator: "/admin",
  adminAuth: "/Auth",
  musicUpload: "/musicUpload",
  videoUpload: "/videoUpload",
  adminStat: "/stat"
};

export default routes;
