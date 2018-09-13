var express = require('express');
var router = express.Router();
var io_handler = require('../io_handler.js');

app.use('/api', require('./api/routes'));

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', {
    title: 'Foxtrot Sensor Reading',
    sensor_humid: io_handler.getHumidity(),
    sensor_motion: io_handler.getMotionSensorStatus(),
    sensor_temp: io_handler.getTemperature()
    });
});

module.exports = router;
