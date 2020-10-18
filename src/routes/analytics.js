// external dependencies
const Router = require('express-promise-router')

// local dependencies
const analyticsController = require('../controllers/analyticsController')

// create a new express-promise-router
const router = new Router()

// retrive attractions array/single attraction as geoJSON feature collection/feature
router.get('/closest/:lat&:lng', analyticsController.loadClosestAttractions)

// export our router to be mounted by the parent application
module.exports = router
