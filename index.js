const path         = require('path');
const express      = require('express');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const cors         = require('cors')
require('dotenv').config();

// local dependencies
const mountRoutes = require('./src/routes');
const servConf    = require('./src/config/server');

// bootstrap express and mount routes
const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './public')));

mountRoutes(app);

// Handle production
if (process.env.NODE_ENV === 'production') {
	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, './public/index.html')));
}

app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(servConf.port, () => {
  console.log(`GIS app listening at http://localhost:${servConf.port}`)
});

