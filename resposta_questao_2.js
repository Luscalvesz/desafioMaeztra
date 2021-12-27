function verificaDuplicado(arr) {
    // Verificação para saber se o que foi passado é um array mesmo.
    if (!Array.isArray(arr)) {
        return `${arr} não é um Array!`
    }  
    // Uso o sort para ordenar os elementos do array.
    let arrayOrdenado = arr.sort();
    // Array vazio para armazenar os elementos duplicados.
    let arrayRepetido = [];
    // For para percorrer o array.
    for (let i = 0; i <= arrayOrdenado.length - 1; i++) {
        // Verifico se o elemento na posição i é igual ao elemento da posição i+1.
        if (arrayOrdenado[i] == arrayOrdenado[i + 1]) {
            // Adiciono o elemento igual no array de números repetidos.
            arrayRepetido.push(arrayOrdenado[i]);
        }
    }
    //  Retorna o array de duplicados.
    return arrayRepetido;
}