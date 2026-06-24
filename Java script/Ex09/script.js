function verificarVelocidade(limite, velocidade)
 {
    if (velocidade <= limite) {
        return "Velocidade dentro do limite.";
    }
    return "Velocidade acima do limite.";
}
let multa = document.getElementById("multa");
multa.style.color = "red";