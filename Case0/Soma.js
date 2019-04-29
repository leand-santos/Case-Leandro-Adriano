var valor = document.getElementById("soma").value;

function soma() {
    if (valor == 8)
        document.getElementById('validacao').innerHTML = "Válido";
    else
        document.getElementById('validacao').innerHTML = "Inválido";
}