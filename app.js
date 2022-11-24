const { generarTabla } = require('./functions/tabla');
const argv = require('./config/yargs');

console.clear();

generarTabla( argv.base, argv.listar, argv.hasta )
  .then(nombreArchivo => console.log(`El archivo ${nombreArchivo} se ha creado con exito!`))
  .catch(err => console.log(err))


