function incluirPerguntaMultipla() {
    var pergunta = document.getElementById("pergunta").value;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var certa = document.getElementById("certa").value;


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("msg").innerHTML = this.responseText;
        }
    };

    xmlhttp.open("POST", "perguntaMultipla.php", true);

    var dados = new FormData();

    dados.append("pergunta", pergunta);
    dados.append("a", a);
    dados.append("b", b);
    dados.append("c", c);
    dados.append("certa", certa);

    xmlhttp.send(dados);
}
