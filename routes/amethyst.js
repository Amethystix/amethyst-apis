const express = require('express');
const router = express.Router();
const getActivity = require('../helpers/activity.helper');


router.get('/current-activity', (req, res, next) => {
  const activity = getActivity(req.start);
  res.json({activity});
});

module.exports = router;