const taskRoutes = require('./api/task/route');

const router = require('express').Router();

router.use('/task', taskRoutes);

module.exports = router;