const express = require('express');
const router = express.Router();
import login from './login'

// http://localhost:3000/
router.get('/', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      message: 'Welcome to the api'
    });
});
router.post('/register', login.userRegister);
router.post('/login', login.userLogin)


module.exports = router;
