/**
 * @class baseChannel
 * @version 1.0.0
 * @description Provides Channel object used for all channels
 */

var postal, channel;

postal = require("postal");
channel = postal.channel('app');

module.exports = channel;