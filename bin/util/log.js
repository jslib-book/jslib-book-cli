const chalk = require('chalk');

function log() {
    const red = chalk.bold.red;
    const green = chalk.bold.green;
    const blue = chalk.bold.blue;

    const error = console.error;
    const log = console.error;
    const info = console.info;l

    console.error = function () {
        error(red.apply(console, arguments));
    };

    console.log = function () {
        log(green.apply(console, arguments));
    };

    console.info = function (){ 
        info(blue.apply(console, arguments));
    };
}

exports.log = log;