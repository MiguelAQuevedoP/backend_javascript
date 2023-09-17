const { format } = require('timeago.js');

const helpers = {};

helpers.timeago = (timastamp) => {
    return format(timastamp);
};

module.exports = helpers;