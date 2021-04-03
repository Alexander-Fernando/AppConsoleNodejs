const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Multiplicando'
                })
                .check((argv, options) => {
                    if( isNaN( argv.b )){
                        throw 'La base debe ser un número';
                    }
                    return true;
                })
                .option('lim', {
                    alias: 'limite',
                    type: 'number',
                    default: 12,
                    demandOption: true,
                    describe: 'Multiplicador'
                })
                .check(argv => {
                    if(isNaN( argv.lim)){
                        throw 'El limite debe ser un número';
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Mostrar en consola'
                })
                .argv;

module.exports = argv;