function verificar(){
    let velocidade = Number.parseInt(document.getElementById("velocidade").value);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML += `<p>Sua velocidade atual é ${velocidade} km/h!</p>`;

    if (velocidade > 80) {
        
        resultado.innerHTML += `<p>Você está acima do limite de velocidade! Multa aplicada.</p>`;
        resultado.innerHTML += `<p>Uso de cinto de segurança é obrigatório!</p>`;
    } else {
       
        resultado.innerHTML += `<p>Você está dentro do limite de velocidade.</p>`;
        resultado.innerHTML += `<p>Uso de cinto de segurança é obrigatório!</p>`;
    }
}
    