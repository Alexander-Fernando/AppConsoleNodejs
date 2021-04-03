const fs = require('fs');
const colors = require('colors');

const tablaMult = async ( base, limite, listar ) => {
    console.clear();
    try{
        let salida = `
                ${' ======================== '.rainbow}
                    ${'TABLA DEL'.green} : ${base}
                ${' ======================== '.rainbow}\n`;

        let salidaArchivo = `
                    ======================== 
                       TABLA DEL : ${base}
                    ========================\n`;


        for( let i=1; i<=limite; i++){
            salida += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;

            salidaArchivo += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salidaArchivo);
        if(listar) console.log(salida);
        return `tabla-${base}.txt`;
    }catch( error ){
        throw error;
    }
}

module.exports = {
    tablaMult
}