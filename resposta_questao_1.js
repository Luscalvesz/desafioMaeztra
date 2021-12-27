function recebeInteiro(inteiro) {
    // Verificação para saber se o número informado é inteiro.
    if (!Number.isInteger(inteiro)) {
        return `O número ${inteiro} não é válido`
    }
    // Pego o valor informado e converto para String, dou um split, que me retorna um array onde cada elemento
    // é um número, depois dou um map para transformar cada um dos elementos em inteiro novamente.
    let inteiroArr = inteiro.toString().split('').map((n) => parseInt(n))
    // Crio dois arrays que recebem todo o conteúdo de "inteiroArr" e uso um sort para ordenar de forma crescente e decrescente.
    let inteiroArrAsc = new Array(...inteiroArr).sort((a, b) => b - a)
    let inteiroArrDesc = new Array(...inteiroArr).sort((a, b) => a - b)
    // Uso o join para retornar uma string com todos os elementos, separados por ",". E comparo se o array informado é igual a
    // um dos arrays ordenados, retornando um true ou false. 
    let verificaOrdem = (
        inteiroArr.join(',') === inteiroArrDesc.join(',') || inteiroArr.join(',') === inteiroArrAsc.join(',')
    )
    // Verificação para retornar a resposta ao usuário.
    if (verificaOrdem) {
        return `O número ${inteiro} está ordenado!`
    } else {
        return `O número ${inteiro} não está ordenado!`
    }
}