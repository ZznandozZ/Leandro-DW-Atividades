/*for (var cont = 0; cont <=5; cont ++) {
    console.log(`O contador está no passo ${cont}.`);
}

var i = 0;
do {
    console.log(` Do While - O contador está no passo ${i}.`);
    i++;
} while (i <= 7);

/* laço de repetição - Do While - executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa. 
do {
    var senha = window.prompt("Digite a senha: ");
   
       
    } while (senha !== "123456");*/

    /* Laço de repetição while - executa o bloco de código enquanto a condição for verdadeira. */

function tabuada() {
    var numero = Number(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

   
    resultado.innerHTML = `<h2>Tabuada do ${numero}</h2>`;

    for (var cont = 1; cont <= 10; cont++) {
        resultado.innerHTML += `<p>${numero} x ${cont} = ${numero * cont}</p>`;
    }
}