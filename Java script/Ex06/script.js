let media = 7;
let situacao  = ''
if (media >= 7) {
    situacao = 'Aprovado';
    }else if (media < 5) {
    situacao = 'Reprovado';
    } else {
    situacao = 'Recuperação';
    }
    console.log(` Aluno Reprovado. Sua média é ${media}`);
console.log(` Aluno Aprovado. Sua média é ${media}`);