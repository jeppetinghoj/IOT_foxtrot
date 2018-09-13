const sensor = require('node-dht-sensor');
const Gpio = require('onoff').Gpio
const motion_sensor = new Gpio(17, 'in');

sensor.initialize(22, 12);

module.exports.getTemperature = function(){
    readout = sensor.read();
    return readout.temperature.toFixed(2) + 'C';
  };
  
module.exports.getHumidity = function(){
    readout = sensor.read();
    return readout.humidity.toFixed(2) + '%';
  };

module.exports.getMotionSensorStatus = function(){
    return motion_sensor.readSync();
};