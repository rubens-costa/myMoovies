const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Entrei em moovies");
});


module.exports = router;
