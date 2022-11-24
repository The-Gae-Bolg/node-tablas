const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Es el limite'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en pantalla'
  })
  .check((argv, options) => {

    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw 'Se requiere un numero';
    }

    return true;

  })
  .argv;

module.exports = argv;