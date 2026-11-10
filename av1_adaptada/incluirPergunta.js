function incluirPergunta() {
    var pergunta = document.getElementById("pergunta").value;
    var resposta = document.getElementById("resposta").value;

    console.log(pergunta);
    console.log(resposta);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("msg").innerHTML = this.responseText;
        }
    };

    xmlhttp.open("POST", "perguntaTexto.php", true);

    var dados = new FormData();
    dados.append("pergunta", pergunta);
    dados.append("resposta", resposta);

    xmlhttp.send(dados);
}