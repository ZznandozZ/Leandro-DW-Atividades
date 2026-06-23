/* window.alert('Olá Mundo!') */
console.log(`Olá Mundo! - Console Log`)

let nome = window.prompt(`Digite seu nome`)
let paragrafo = document.getElementById('texto')
console.log(paragrafo)
paragrafo.innerHTML = `<p>Olá Mundo!
Receba o ${nome} como novo jogador</p>`
paragrafo.style.color = `red`