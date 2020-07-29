const express = require('express');
const router = express.Router();
var { getSkrumbleProvider } = require('../services/skrumble.service');

//get Homepage
router.post('/rpc', async function (req, res, next) {

  const skrumbleProvider = await getSkrumbleProvider();
  skrumbleProvider.sendAsync(req.body, (err, result) => {
    res.json(result)
  });

});

module.exports = router;
