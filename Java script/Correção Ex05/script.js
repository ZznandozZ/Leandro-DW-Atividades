
   var x = 0;
        let contador = 0;

        function cotar() {
            x++;
           let resutado = document.getElementById("resultado");
           resultado.innerText = `O contador está com ${x} cliques`;
        }

        function zerar() {
            x = 0;
            document.getElementById("resultado").innerText = `O contador está com ${x} cliques`;
        }