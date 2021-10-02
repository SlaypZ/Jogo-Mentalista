var numeroSecreto = parseInt(Math.random() * 11);
var x = 0;
console.log("você tem " + (3 - x) + " tentativas");

function Chutar() {
  // Pegando o valor do chute
  var chute = parseInt(document.getElementById("valor").value);
  //console.log("você tem " + (3 - x) + " tentativas");
  // Avaliando o valor do chute
  if (chute == numeroSecreto) {
    if (x < 3) {
      var resultado = "Você acertou! O número secreto é " + numeroSecreto;
      console.log("x é " + x);
    } else {
      var resultado =
        "Você esgotou o número de tentativas. Clique em Resetar para reinicar o jogo.";
    }
  } else if (chute < 0 || chute > 10) {
    console.log("Número inválido! Você precisa digitar um número entre 0 e 10");
    var resultado =
      "Número inválido! Você precisa digitar um número entre 0 e 10";
  } else if (chute < numeroSecreto) {
    x = x + 1;
    if (x <= 3) {
      var resultado =
        "Você Erroouuuu! :( O número secreto é maior. Você tem mais " +
        (3 - x) +
        " tentativas!";
    } else {
      var resultado =
        "Você esgotou o número de tentativas. Clique em Resetar para reinicar o jogo.";
    }
  } else {
    x = x + 1;
    if (x <= 3) {
      var resultado =
        "Você Erroouuuu! :( O número secreto é menor. Você tem mais " +
        (3 - x) +
        " tentativas!";
    } else {
      var resultado =
        "Você esgotou o número de tentativas. Clique em Resetar para reinicar o jogo.";
    }
  }
  document.getElementById("resultado").innerText = resultado;
}

function Resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  x = 0;
  console.log("número secreto sorteado novamente para : " + numeroSecreto);
}
