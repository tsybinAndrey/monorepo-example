const express = require('express');
const requestIdMiddleware = require('@tcandrei/request-id-middleware');
const metrics = require('@tcandrei/metrics-middleware');
const {notFound, ping} = require('./handlers');

const app = express();
/* MIDDLEWARES */
app.use(requestIdMiddleware);
app.use(metrics.metricsCollector('simple-express-server'));

/* HANDLERS */
metrics.expressMetricsRouteHandler(app, '/metrics');
app.get('/ping', ping);

app.use(notFound);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server is ready and listening...');
});

const gracefullShutdown = () => {
  server.close(() => {
    console.log('Server closed...');
  });
};

process.once('SIGINT', gracefullShutdown);
