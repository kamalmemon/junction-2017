const express = require('express');
const router = express.Router();
const login =  require('./login');
const object =  require('./object_api');
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
router.post('/object', object.addObject)
router.get('/objects', object.getAllObjects)
router.get('/objectbyid', object.getObjectById)

module.exports = router;
