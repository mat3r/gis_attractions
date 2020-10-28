// external dependencies
const Router = require('express-promise-router')

// local dependencies
const attractionPolicy = require('../policies/attractionPolicy')
const mainController   = require('../controllers/mainController')

// create a new express-promise-router
const router = new Router()

// retrive attractions array/single attraction as geoJSON feature collection/feature
router.get('/attraction/:id?', mainController.loadAttractions)

// insert a new attraction into the database
router.post('/attraction',
  attractionPolicy.saveAttraction,
  mainController.saveAttraction
)

// update an existing attraction in the database
router.put('/attraction',
  attractionPolicy.saveAttraction,
  mainController.updateAttraction
)

// update an existing attraction in the database
router.delete('/attraction/:id', mainController.deleteAttraction)

// upload image to static folder public/img
router.post('/uplImg', mainController.uploadImageFile)

// export our router to be mounted by the parent application
module.exports = router
