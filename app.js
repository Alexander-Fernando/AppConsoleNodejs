
const {tablaMult} = require('../03-bases-node/helpers/multiplicar');
const argv = require('../03-bases-node/config/yargs');
require('colors');

console.clear();
console.log(argv);

tablaMult(argv.b, argv.lim, argv.l)
        .then(respuesta => console.log(respuesta.rainbow))
        .catch( error => console.log(error.red));