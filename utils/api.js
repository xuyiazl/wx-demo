'use strict';

var opts = {
    HOST_URI: 'http://...',
    DATA: '/data'
};
//拼凑数据地址
function _getDataUri() {
    return opts.HOST_URI + opts.DATA;
}

module.exports = {
    dataUri: _getDataUri()
}
