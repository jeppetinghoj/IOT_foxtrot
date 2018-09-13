var express = require('express');
var router = express.Router();
var io_handler = require('./../io_handler.js');

router.get('/humiditysensor', function(req, res, next) {
    res.status(200).json({
       humidity: io_handler.getHumidity(),
       date: Date.now()
       });
   });

router.get('/temperaturesensor', function(req, res, next) {
    res.status(200).json({
    temperature: io_handler.getTemperature(),
    date: Date.now()
    });
});

router.get('/motionsensor', function(req, res, next) {
    res.status(200).json({
        motionsensorstatus: io_handler.getMotionSensorStatus(),
        date: Date.now()
    });
});

module.exports = router;