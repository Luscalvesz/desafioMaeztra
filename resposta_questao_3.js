function verificaSequencia(sequencia) {
    // Verifico se o valor passado no parâmetro da função é do tipo String.
    if (typeof sequencia !== 'string') {
        return `${sequencia} não é uma string`
    }
    // Transformo a sequência informada em um array, onde cada posição possui um caractere.
    const valorArr = sequencia.split('');
    // Inicializo duas variáveis com valor 0.
    let abertura = 0
    let fechamento = 0
    // Itero por todo o array.
    for (let i = 0; i < valorArr.length; i++) {
        // Verificação para saber se o elemento do array é igual a uma abertura/fechamento, caso seja,
        // aumenta o valor das variáveis "abertura/fechamento"
        if (valorArr[i] == "(" || valorArr[i] == "{" || valorArr[i] == "[") {
            abertura++
        }else if (valorArr[i] == ")" || valorArr[i] == "}" || valorArr[i] == "]") {
            fechamento++
        }
    }
    // Verifico se os números são iguais para exibir os resultados. 
    if (abertura == fechamento) {
        return `${sequencia} é uma sequência válida!`
    }else{
        return `${sequencia} não é uma sequência válida!`
    }

    // P.S.  Sei que o código está somente verificando se a quantidade de elementos que abrem é a mesma que
    // fecham, não valido se a sequência de abertura está certa, nem se o caractere que fechou, é do mesmo tipo
    // do que abriu. Nessa questão a lógica me quebrou um pouco kk
}