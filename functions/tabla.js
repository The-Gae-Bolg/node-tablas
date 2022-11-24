const fs = require('fs');
const colors = require('colors');

const generarTabla = async( base = 5, listar = false, hasta = 10) => {
  
  try{
    let tabla = '';

    for( let i = 1; i <= hasta; i++ ){
      tabla += `\t${ base } X ${ i } = ${ base * i}\n`
    }

    if( listar ){
      console.log("=========================".green);
      console.log(`     Tabla de base ${ base }`.rainbow);
      console.log("=========================".green);
      console.log( tabla.rainbow );
    }

    fs.writeFileSync(`./tablas/Tabla-Del-${base}.txt`, tabla);

    return `Tabla-Del-${base}.txt`;

  } catch (err) {
    throw err;
  }
}

module.exports = {
  generarTabla
}