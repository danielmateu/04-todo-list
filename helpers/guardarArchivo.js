const fs = require('fs');

const archivo = './db/data.json'

/**
 * It takes the data from the JSON file and writes it to the file.
 * @param data - the data to be written to the file
 */
const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data) )
    
}

const leerDb = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding : 'utf-8'});
    const data = JSON.parse(info);
    // console.log(data);

    return data;

}

module.exports = {
    guardarDB,
    leerDb,

}