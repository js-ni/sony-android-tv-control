const Command = require('..');
const setPowerStatus = require('../commands/setPowerStatus');

const command = new Command('192.168.1.11', '2801');

command.call(setPowerStatus(true));
