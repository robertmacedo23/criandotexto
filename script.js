document.getElementById("botaoExibir").addEventListener("click", function () {
    const texto = document.getElementById("entradaTexto").value;
    document.getElementById("resultado").innerText = texto;
  });
  