/**
 * This API provides the function to change the current power status of the device.
 *
 * @arguments
 * status {Boolean}
 *
 * setPowerStatus(true)
 * setPowerStatus(false)
 *
 * https://pro-bravia.sony.net/develop/integrate/rest-api/spec/service/system/v1_0/setPowerStatus/
 */

module.exports = status => ({
  path: '/sony/system',
  body: {
    method: 'setPowerStatus',
    params: [
      {
        status,
      },
    ],
  },
});
