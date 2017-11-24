const express = require('express');
const router = express.Router();

// http://localhost:3000/
router.get('/', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      message: 'Welcome to the api'
    });
});

module.exports = router;
