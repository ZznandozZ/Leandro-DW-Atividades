/* Array - Listas */
let lista = [];
let idade = [20, 30, 40, 50];
let nome = ["Leandro", "João", "Maria", "José"];
console.log(idade[2]);
console.log(lista);
console.log(nome[3]);

console.log(`O tamanho da lista nome é ${nome.length}.`);

/*for (var cont = 0; cont < nome.length; cont++) {
}
for (var cont in nome) {
    console.log(`Usuario  ${nome[n]}`);
}
*/
lista.unshift(51); // Adiciona um elemento no início da lista
lista.push(52); // Adiciona um elemento no final da lista
lista.pop(); // Remove o último elemento da lista
lista.shift(); // Remove o primeiro elemento da lista
lista.sort(); // Ordena a lista em ordem alfabética ou numérica
lista.reverse(); // Inverte a ordem da lista
console.log(lista);
nome.splice(1, 2); // Remove elementos da lista a partir do índice 1, removendo 2 elementos
console.log(lista);

var cadastro = [
    ['Leandro', 20, 'Masculino'],
    ['João', 30, 'Masculino'],
    ['Maria', 40, 'Feminino'],
    ['José', 50, 'Masculino']
]
console.log(cadastro[1][2]); // Acessa o elemento na posição 1 da lista cadastro e na posição 2 da sublista