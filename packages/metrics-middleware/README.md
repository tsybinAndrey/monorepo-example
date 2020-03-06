# `metrics-middleware`

prometheus based middleware to collect response-time metrics from express server app

## Usage

```
const express = require('express');
const metrics = require('@tcandrei/metrics-middleware');

const app = express();

app.use(metrics.metricsCollector('simple-express-server'));

metrics.expressMetricsRouteHandler(app, '/metrics');

app.get('/ping', ping);

app.use(notFound);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server is ready and listening...');
});


```
