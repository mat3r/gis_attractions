// external dependencies
const path   = require('path')
const multer = require('multer');

// local dependencies
const db     = require('../db')
const helper = require('./helper')

// Set Storage Engine for images with multer
const storage = multer.diskStorage({
  destination: './public/img/',
  filename: function(req, file, cb) {
    cb(null, req.body.dbFilename + path.extname(file.originalname));
  }
});

// Init Image Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single('image');

  // function to upload image with multer returning Promise
function uploadAsync (req, res) {
  return new Promise (function (resolve, reject) {
    upload(req, res, (err) => {
      console.log('err',err)
      if(err) reject(err);
      resolve(req.file.filename);
    });
  });
}

/********** EXPORT CONTROLLER MODULE **********/
module.exports = {

  /* Execute LOAD attractions from PostgreSQL DB */
  async loadAttractions(req, res, next) {
    const params = []
    let sql = 'SELECT id, name, image, web, category, ST_AsGeoJSON(geom,5) as geom FROM cdmx_attractions'
    // prepare statement and params for single geoJSON feature
    if (req.params.id) {
      const { id } = req.params
      params.push (id)
      sql += ' WHERE id = $1'
    }
    try {
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

  /* Execute SAVE attraction to PostgreSQL DB */
  async saveAttraction(req, res, next) {
    // prepare query statement
    const sql = 'INSERT INTO cdmx_attractions (name, image, web, category, geom) VALUES ($1, $2, $3,$4, ST_SetSRID(ST_MakePoint($5, $6), 4326)) RETURNING id'
    const { name, image, web, category, lng, lat } = req.body
    try {
      // execute database query
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

  /* Execute UPDATE of attraction record in PostgreSQL DB */
  async updateAttraction(req, res, next) {
    // prepare query statement
    const sql = 'UPDATE cdmx_attractions SET name = $2, image = $3, web = $4, category = $5, geom = ST_SetSRID(ST_MakePoint($6, $7), 4326) WHERE id = $1'
    const { id, name, image, web, category, lng, lat } = req.body
    try {
      // execute database query
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

  /* Execute Delete attraction in PostgreSQL DB */
  async deleteAttraction(req, res, next) {
    // prepare query statement
    const sql = 'DELETE FROM cdmx_attractions WHERE id = $1'
    const { id } = req.params
    try {
      // execute database query
      const { err, rowCount } = await db.query (sql, [ id ])
      if (rowCount === 1) {
        res.json ({
          success: {
            message: 'DELETED',
            id
          }
        })
      } else {
        const error = new Error('Database Error')
        error.status = 404;
        throw error
      }
    } catch (err) {
      next (err)
    }
  },


  /* Execute UPLOAD image file to Backend Server's static folder */
  async uploadImageFile (req, res, next) {
    try {
      const response = await uploadAsync (req, res)
      res.status(200).send({ success: response })
    } catch (err) {
      next (err)
    }
  }

}
