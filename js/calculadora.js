function somar() {
    const numero1 = parseFloat(document.getElementById("numero1Soma").value);
    const numero2 = parseFloat(document.getElementById("numero2Soma").value);
    // evite mexer no código acima!
  
    const resultadoSoma = numero1 + numero2;
  
    /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
    Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
    document.getElementById("resultadoSoma").innerHTML = resultadoSoma;
}

function subtrair() {
    const numero1 = parseFloat(document.getElementById("numero1Sub").value);
    const numero2 = parseFloat(document.getElementById("numero2Sub").value);
    // evite mexer no código acima!

    const resultadoSub = numero1 - numero2;

    /* use as constantes numero 1 e numero 2 e realize a subtração entre elas.
        Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
    document.getElementById("resultadoSub").innerHTML = resultadoSub;
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1Mult").value);
    const numero2 = parseFloat(document.getElementById("numero2Mult").value);
    // evite mexer no código acima!

    const resultadoMult = numero1 * numero2;

    /* use as constantes numero 1 e numero 2 e realize a multiplicação entre elas.
        Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
    document.getElementById("resultadoMult").innerHTML = resultadoMult;
}

function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1Div").value);
    const numero2 = parseFloat(document.getElementById("numero2Div").value);
    // evite mexer no código acima!

    const resultadoDiv = numero1 / numero2;

    /* use as constantes numero 1 e numero 2 e realize a divisão entre elas.
        Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
    document.getElementById("resultadoDiv").innerHTML = resultadoDiv;
}

function limparCamposProjeto1() {
    var camposProjeto1 = document.querySelectorAll('#projeto1 input[type="number"]');
    camposProjeto1.forEach(function (campo) {
        campo.value = '';
    });
    document.getElementById('resultadoSoma').textContent = '';
    document.getElementById('resultadoSub').textContent = '';
    document.getElementById('resultadoMult').textContent = '';
    document.getElementById('resultadoDiv').textContent = '';
}