
function verCoincidencias() {
    let texto = document.querySelector('#texto').value;
    let caracter = document.querySelector('#caracter').value;
    if (texto !== '' && caracter !== '') {
        document.querySelector('#conincidencia').innerHTML = `
        El caracter "${caracter}" se repite ${contarRepeticiones(texto, caracter)} veces en la cadena ingresada!!
        `
    }
}

function contarRepeticiones(cadena, caracter) {
    let caracteres = cadena.split('');
    let contador = 0;

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === caracter) {
            contador++;
        }
    }
    return contador;
}


