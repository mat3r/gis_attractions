// local dependencies
const db     = require('../db')
const helper = require('./helper')

/********** EXPORT CONTROLLER MODULE **********/
module.exports = {

  async loadAttractions(req, res, next) {
    try {
      const params = []
      let sql = 'SELECT id, name, image, web, category, ST_AsGeoJSON(geom,5) as geom FROM cdmx_attractions'
      // prepare statement and params for single geoJSON feature
      if (req.params.id) {
        const { id } = req.params
        params.push (id)
        sql += ' WHERE id = $1'
      }
      // execute database query
      const { err, rows } = await db.query(sql, params)
      // Check for empty response and throw error
      if (!rows.length) {
        const error = new Error('Not found in database');
        error.status = 404;
        throw error
      }
      if (rows.length === 1) {
        // send single feature as response
        res.json (helper.rowToGeoJson (rows[0]))
      } else {
        // compose geoJSON features array from rows
        const features = helper.rowsToGeoJson(rows)
        // send feature collection as response
        res.json ({
          type: "FeatureCollection",
          features
        })
      }
    } catch (err) {
      next(err)
    }
  },

  async saveAttraction(req, res, next) {
    try {
      const sql = 'INSERT INTO cdmx_attractions (name, image, web, category, geom) VALUES ($1, $2, $3,$4, ST_SetSRID(ST_MakePoint($5, $6), 4326)) RETURNING id'
      const { name, image, web, category, lng, lat } = req.body
      const { err, rows } = await db.query (sql, [ name, image, web, category, lng, lat ])
      if (rows.length === 1) {
        res.json ({
          success: {
            message: 'INSERTED',
            id: rows[0].id
          }
        })
      } else {
        const error = new Error('Database Error');
        error.status = 404;
        throw error
      }
    } catch (err) {
      next (err)
    }
  },

  async updateAttraction(req, res, next) {
    try {
      const sql = 'UPDATE cdmx_attractions SET name = $2, image = $3, web = $4, category = $5, geom = ST_SetSRID(ST_MakePoint($6, $7), 4326) WHERE id = $1'
      const { id, name, image, web, category, lng, lat } = req.body
      const { err, rowCount } = await db.query (sql, [ id, name, image, web, category, lng, lat ])
      if (rowCount === 1) {
        res.json ({
          success: {
            message: 'UPDATED',
            id
          }
        })
      } else {
        const error = new Error('Database Error');
        error.status = 404;
        throw error
      }
    } catch (err) {
      next (err)
    }
  },

  async deleteAttraction(req, res, next) {
    try {
      const sql = 'DELETE FROM cdmx_attractions WHERE id = $1'
      const { id } = req.params
      const { err, rowCount } = await db.query (sql, [ id ])
      if (rowCount === 1) {
        res.json ({
          success: {
            message: 'DELETED',
            id
          }
        })
      } else {
        const error = new Error('Database Error');
        error.status = 404;
        throw error
      }
    } catch (err) {
      next (err)
    }
  }

}
