const request = require('request');
const setAudioMute = require('./commands/setAudioMute.js');
const setAudioVolume = require('./commands/setAudioVolume.js');
const setPowerStatus = require('./commands/setPowerStatus.js');

class Control {
  constructor(ip = '0.0.0.0', psk = '') {
    this.ip = ip;
    this.psk = psk;
    this.body = {
      version: '1.0',
      id: 1,
    };
  }

  /**
   * HTTP Request Callback
   */
  static callback(error, response, body) {
    let output = {};
    if (!error && response.statusCode === 200) {
      output = body;
    }
    return output;
  }

  /**
   * Execute command
   */
  call(command) {
    const headers = {
      Origin: 'null',
      'X-Auth-PSK': this.psk,
      'User-Agent': 'sony-android-tv-control',
      'Content-Type': 'text/plain;charset=UTF-8',
    };

    const stringBody = JSON.stringify(Object.assign({}, this.body, command.body));

    const options = {
      url: `http://${this.ip}${command.path}`,
      method: 'POST',
      headers,
      body: stringBody,
    };

    request(options, this.callback);
  }
}

module.exports = {
  Control,
  setAudioMute,
  setAudioVolume,
  setPowerStatus,
};
