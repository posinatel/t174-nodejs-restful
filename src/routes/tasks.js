const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  const data = {
    message: 'Handling HTTP POST request for /api/tasks'
  };

  response
    .status(200)
    .json(data);
});

router.get('/', (request, response) => {
  const data = {};
  data.message = `Handling ${request.protocol} ${request.method} for /api/tasks`;

  response
    .status(200)
    .json(data)
});

router.get('/:taskId', (request, response) => {
  const data = {
    taskId: request.params.taskId,
    message: `Handling HTTP GET by ID`
  }

  response
    .status(200)
    .json(data);
});

module.exports = router;