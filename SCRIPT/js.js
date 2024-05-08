var RegistroAtual = 0;
var TotalRegistro = 0;

function MostraRegistro(index) {
    var table = document.getElementById("tabela");
    table.classList.remove("fadeIn");
    setTimeout(function() {
        table.classList.add("fadeIn");
    }, 0); // Adding a slight delay to ensure the animation restarts
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
    }
    rows[index].style.display = "";
}

function proximo() {
    if (RegistroAtual < TotalRegistro - 1) {
        RegistroAtual++;
        MostraRegistro(RegistroAtual);
        document.getElementById("RegistroAtualVL").innerText = RegistroAtual;
    }
}

function anterior() {
    if (RegistroAtual > 0) {
        RegistroAtual--;
        MostraRegistro(RegistroAtual);
        document.getElementById("RegistroAtualVL").innerText = RegistroAtual;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    TotalRegistro = document.getElementById("tabela").rows.length;

    document.getElementById("RegistroAtualVL").innerText = RegistroAtual;
    document.getElementById("TotalRegistroVL").innerText = TotalRegistro;  

    MostraRegistro(RegistroAtual);
});

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        proximo();
    } else if (event.key === "ArrowLeft") {
        anterior();
    }
});
