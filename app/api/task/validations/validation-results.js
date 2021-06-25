const { badRequest, internalServerError } = require('../../../format');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        badRequest(req, res, errors.array());
      }
    } catch(error) {
        internalServerError(req, res, error)
    }
    next();
}