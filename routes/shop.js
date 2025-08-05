const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

const { products } = require('./admin');

router.get('/', (req, res, next) => {
    console.log("Shop Js", products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;