const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/knockknock', function (req, res, next) {
  res.status(200).send('Welcome to housing website backend');
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> f782be6c844ebdc0addf51ad60235d11f599fe83
