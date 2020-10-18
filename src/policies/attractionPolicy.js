const Joi = require('joi');

module.exports = {
  saveAttraction (req, res, next) {
    const schema = Joi.object()
      .keys({
        id       : Joi.number().allow(null),
        name     : Joi.string().required(),
        category : Joi.string().required(),
        web      : Joi.string().required(),
        image    : Joi.string().required(),
        lat      : Joi.number().required(),
        lng      : Joi.number().required()
      })
    const { error } = schema.validate(req.body);

    if (error) {
      console.error('\x1b[45m%s\x1b[0m', 'Validation Error: ' + error.details[0].message);
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Name'
            }
          });
          break;
        case 'category':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Category'
            }
          });
          break;
        case 'web':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Wiki URL'
            }
          });
          break;
        case 'image':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Image'
            }
          });
          break;
        case 'lat':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Geometry Lattitude'
            }
          });
          break;
        case 'lng':
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error: Geometry Longitude'
            }
          });
          break;
        default:
          res.status(400).send({
            error: {
              code: 'INVALID_ENTRY',
              msg: 'Input Error'
            }
          });
      }
    } else {
      next();
    }
  }
};

