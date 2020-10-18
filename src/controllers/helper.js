module.exports = {

  /********** CONTROLLER HELPER FUNCTIONS **********/

  // Function: compose geoJSON features array from rows
  rowsToGeoJson: function (rows) {
    const features = []
    rows.forEach(row => {
      features.push (this.rowToGeoJson (row))
    })
    return features
  },

  // Function: compose geoJSON feature from row
  rowToGeoJson: function (row) {
    const geom = JSON.parse(row.geom)
    delete row.geom
    return {
      type: "Feature",
      properties: row,
      geometry: geom
    }
  }

}
