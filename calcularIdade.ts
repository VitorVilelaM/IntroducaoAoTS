interface ICalcularIdade{
    nome : string,
    anoNascimento: number,
    profissao?: string //Parametro Opcional
}

function calcularIdade({nome, anoNascimento}: ICalcularIdade): string{
    const idade: number = 2022 - anoNascimento;
    return `Seu nome é ${nome} e sua idade é ${idade} anos`;
}

console.log(calcularIdade({nome:"Vitor",anoNascimento:2002}));

function qualquer(): number {
    return 2;
}
