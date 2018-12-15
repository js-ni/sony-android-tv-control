/**
 * This API provides the function to change the audio volume level.
 *
 * @arguments
 * volume {String}
 *
 * setAudioVolume('10')
 * setAudioVolume('+1')
 * setAudioVolume('-1')
 *
 * https://pro-bravia.sony.net/develop/integrate/rest-api/spec/service/audio/v1_2/setAudioVolume/
 */

module.exports = volume => ({
  path: '/sony/audio',
  body: {
    method: 'setAudioVolume',
    params: [
      {
        target: 'speaker',
        ui: 'on',
        volume,
      },
    ],
  },
});
