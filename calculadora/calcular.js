function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        document.getElementById("resultadoIMC").innerText = "Preencha todos os campos!";
        document.getElementById("classificacaoIMC").innerText = "";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        cor = "orange";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
        cor = "green";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
        cor = "orange";
    } else {
        classificacao = "Obesidade";
        cor = "red";
    }

    document.getElementById("resultadoIMC").innerText =
        "Seu IMC é: " + imc.toFixed(2);

    let resultadoClassificacao = document.getElementById("classificacaoIMC");
    resultadoClassificacao.innerText = "Classificação: " + classificacao;
    resultadoClassificacao.style.color = cor;
}