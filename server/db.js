const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "55501988",
  host: "localhost",
  port: 5431,
  database: "postgres",
});

module.exports = pool;
