function somar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${parseInt(num1) + parseInt(num2)}`;
}

function subtrair() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let resultado = document.getElementById('Resultado');
    resultado.innerHTML = `Resultado: ${parseInt(numero1) - parseInt(numero2)}`;
    
}