const express = require('express');
const router = express.Router();

const TaskService = require('../services/TaskService');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, async (request, response) => {
  const task = await TaskService.add(request.body);
  response
    .status(200)
    .json(task);
});

router.get('/', async (request, response) => {
  const tasks = await TaskService.getAll();
  tasks && tasks.length
    ? response.json(tasks)
    : response.status(204).end();
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

router.patch('/:taskId', (request, response) => {
  const data = {
    taskId: request.params.taskId,
    message: `Handling HTTP PATCH by ID`
  }

  response
    .status(200)
    .json(data);
});

router.delete('/:taskId', (request, response) => {
  const data = {
    taskId: request.params.taskId,
    message: `Handling HTTP DELETE by ID`
  }

  response
    .status(200)
    .json(data);
});

module.exports = router;