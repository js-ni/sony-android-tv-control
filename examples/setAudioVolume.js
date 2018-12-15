const Command = require('..');
const setAudioVolume = require('../commands/setAudioVolume');

const command = new Command('192.168.1.11', '2801');

command.call(setAudioVolume('10'));
