const {Registry, Summary} = require('prom-client');
const responseTime = require('response-time');

const registry = new Registry();


const requestDuration = new Summary({
  name: 'helpdesk_request_duration',
  help: 'Info about duration for different url\'s',
  labelNames: ['status', 'method', 'path', 'instance'],
  registers: [registry],
});

/**
 * function returning express metrics collector middleware
 * @param {string} instanceName - use service name here
 * to identify it in prometheus
 * @return {Function}
 */
function metricsCollector(instanceName) {
  return responseTime((req, res, time) => {
    const method = req.method.toLowerCase();
    const path = req.route ?
      req.route.path.toLowerCase() :
      req.url.toLowerCase();
    const status = res.statusCode;

    requestDuration.observe({
      status,
      path,
      method,
      instance: instanceName,
    }, time);
  });
}

/**
 * injects /metrics route for perometheus to scratch
 * @param {Object} app - express app
 * @param {string} path - route default is /metrics
 * @return {void}
 */
function expressMetricsRouteHandler(app, path = '/metrics') {
  app.get(path, (req, res) => {
    res.send(registry.metrics());
    res.end();
  });
}

module.exports = {
  metricsCollector,
  expressMetricsRouteHandler,
};
