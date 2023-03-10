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
>>>>>>> c3f967a (Merged main branch manually)
