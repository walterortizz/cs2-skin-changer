exports.config = {
  name: "Waltercito Server",
  lang: "en",
  DB: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_DB: process.env.DB_DB,
    DB_PORT: process.env.DB_PORT,
  },
  HOST: process.env.HOST,
  PROTOCOL: process.env.PROTOCOL,
  PORT: process.env.PORT,
  STEAMAPIKEY: process.env.STEAMAPIKEY,
  connect: {
    show: true,
    url: `steam://connect/${process.env.SERVER_IP}:27015?appid=730/`,
  },
};
