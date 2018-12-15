const Command = require('..');
const setAudioMute = require('../commands/setAudioMute');

const command = new Command('192.168.1.11', '2801');

command.call(setAudioMute(true));
