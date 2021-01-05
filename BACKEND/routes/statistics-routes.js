const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('get in static');
  res.json({mas: 'it work!'})
})

module.exports = router