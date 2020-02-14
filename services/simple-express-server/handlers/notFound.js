/**
 * 404 handler
 * @param {*} req - express request
 * @param {*} res - express response
 * @param {*} next - express next function
 */
function notFoundHandler(req, res, next) {
  res.status(404);

  if (req.accepts('json')) {
    res.send({error: 'Not found'});
    return;
  }

  res.type('txt').send('Not found');
}

module.exports = notFoundHandler;
