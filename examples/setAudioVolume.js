const { Control, setAudioVolume } = require('..');
const config = require('./config');

const control = new Control(config.ip, config.psk);

control.call(setAudioVolume('10'));
