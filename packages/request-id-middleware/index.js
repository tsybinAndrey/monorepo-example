const uuidv1 = require('uuid/v1');

/**
 * Middleware to set unique id to request
 * @param {*} req - express request
 * @param {*} res - express response
 * @param {*} next - express next function
 */
function requestIdMiddleware(req, res, next) {
  req.requestId = uuidv1();
  next();
}

module.exports = requestIdMiddleware;
