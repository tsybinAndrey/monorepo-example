/**
 * ping handler
 * @param {*} req - express request
 * @param {*} res - express response
 * @param {*} next - express next function
 */
function ping(req, res, next) {
  res.status(200).send('Ok');
}

module.exports = ping;
