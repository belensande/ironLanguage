const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const collectionRoutes = require('./collections.controller');
const profilesRoutes = require('./profiles.controller');

router.use('/', authRoutes);
router.use('/collections', collectionRoutes);
router.use('/profiles', profilesRoutes);

module.exports = router;
