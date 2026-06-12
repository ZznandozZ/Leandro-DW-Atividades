function cadastro() {
    event.preventDefault()
    let pNome = document.getElementById('pNome').value;
    let resultado = document.getElementById('resultado');
    let fotoPerfil = document.getElementById()
    window.alert(`${pNome} seu cadastro foi realizado com sucesso!`);
    resultado.innerHTML = `<p>Sr. ${pName}, seu cadastro foi realizado com sucesso!</p>`
    resultado.style.backgroundColor = 'red'

    
    /* window.alert('Cadastro Realizado com Sucesso!!!'); */

}