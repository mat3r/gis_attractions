module.exports = {
  pgPool: {
    host         : process.env.DB_HOST || "192.168.2.10",
    port         : process.env.DB_PORT || 5432,
    database     : process.env.DB_DB   || "webmap101",
    user         : process.env.DB_USER,
    password     : process.env.DB_PASSWD
  }
};
