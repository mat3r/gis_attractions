// external dependencies
const { Pool } = require('pg');

// local dependencies
const dbConfig = require('../config/db.js');

// create pool of client connections with configuration
const pool = new Pool (dbConfig.pgPool);

// Export query method
module.exports = {
  query: (text, params = []) => pool.query(text, params),
}
