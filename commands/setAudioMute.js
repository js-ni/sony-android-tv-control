/**
 * This API provides the function to change the audio mute status.
 *
 * @arguments
 * status {Boolean}
 *
 * setAudioMute(true)
 * setAudioMute(false)
 *
 * https://pro-bravia.sony.net/develop/integrate/rest-api/spec/service/audio/v1_0/setAudioMute/
 */

module.exports = status => ({
  path: '/sony/audio',
  body: {
    method: 'setAudioMute',
    params: [
      {
        status,
      },
    ],
  },
});
