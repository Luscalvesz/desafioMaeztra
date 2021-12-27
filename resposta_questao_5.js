function contaPosicoes(inteiro) {
    // Verificação para saber se o número informado é inteiro.
    if (!Number.isInteger(inteiro)) {
        return `O número ${inteiro} não é válido`
    }
    // Crio uma variável, que recebe o inteiro informado pelo usuário.
    let total = inteiro
    // For que vai rodar de acordo com a quantidade de pessoas. E para cada pessoa,
    // multiplico o resultado pela quantidade de pessoas
    for (let i = 2; i < inteiro; i++) {
        total = i * total;
    }
    return `A foto pode ser tirada de ${total} formas`
}