const { Control, setPowerStatus } = require('..');
const config = require('./config');

const control = new Control(config.ip, config.psk);

control.call(setPowerStatus(true));
