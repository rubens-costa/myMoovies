const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Entrei em category");
});

router.get("/tst", function (req, res) {
    res.send("Entrei em category tst");
});


module.exports = router;
