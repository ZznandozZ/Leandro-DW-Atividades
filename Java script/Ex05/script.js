let contador = 0;
const botao = document.getElementById('botao');
const limpar = document.getElementById('limpar');
const spanContador = document.getElementById('contador');

botao.addEventListener('click', () => {
    contador++;
    spanContador.textContent = contador;
});

limpar.addEventListener('click', () => {
    contador = 0;
    spanContador.textContent = contador;
    
});