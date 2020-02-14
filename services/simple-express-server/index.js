const express = require('express');
const requestIdMiddleware = require('@andrew/request-id-middleware');
const {notFound, ping} = require('./handlers');

const app = express();
/* MIDDLEWARES */
app.use(requestIdMiddleware);

/* HANDLERS */
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
