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

module.exports = router;