// local dependencies
const db     = require('../db')
const helper = require('./helper')

/********** export controller module **********/
module.exports = {

  async loadClosestAttractions(req, res, next) {
    const { lat, lng } = req.params
    const sql = 'SELECT ST_DistanceSphere(ST_SetSRID(ST_MakePoint($2, $1), 4326), geom)/1000 as dist, name, category, image FROM cdmx_attractions ORDER BY dist LIMIT 5'
    try {
      // execute database query
      const { err, rows } = await db.query(sql, [lat, lng])
      // Check for empty response and throw error
      if (!rows.length) {
        const error = new Error('Not found in database');
        error.status = 404;
        throw error
      }
      // send feature collection as response
      res.json (rows)
    } catch (err) {
      next(err)
    }
  }
}
