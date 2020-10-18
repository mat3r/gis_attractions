// mount each individual router into the main application
const main = require('./main')
const analytics = require('./analytics')

module.exports = app => {
  app.use('/api', main)
  app.use('/api/analytics', analytics)
}
