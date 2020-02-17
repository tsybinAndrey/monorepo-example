/**
 * 404 handler
 * @param {*} req - express request
 * @param {*} res - express response
 * @param {*} next - express next function
 * @return {void}
 */
function notFoundHandler(req, res, next) {
  return res.status(404).send('Not found');
}

module.exports = notFoundHandler;
