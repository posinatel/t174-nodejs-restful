const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

const notFound = require('./middleware/not-found');
app.use(notFound);

module.exports = app;