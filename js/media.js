/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    let mensagem = "";
    let mensagem2 = "";

    // evite mexer no código acima!

    const mediaNotas = (nota1 + nota2 + nota3 + nota4)/4
      if (mediaNotas === 0) {
          mensagem = "Infelizmente você zerou a prova :(";
          document.getElementById("situacaoAluno").style.color = 'red';
      } else if (mediaNotas >= 0.1 && mediaNotas <= 3) {
          mensagem = `Caramba, deu ruim, você obteve média ${mediaNotas}! Estude mais e tente novamente!`;
          document.getElementById("situacaoAluno").style.color = 'red';
      } else if (mediaNotas >= 3.1 && mediaNotas <= 5.9) {
          mensagem = `Você obteve média ${mediaNotas}! Falta pouco para a aprovação!`;
          document.getElementById("situacaoAluno").style.color = 'OrangeRed';
      } else if (mediaNotas >= 6 && mediaNotas <= 7) {
          mensagem = `Você está na média com ${mediaNotas}`;
          document.getElementById("situacaoAluno").style.color = 'green';
      } else if (mediaNotas >= 7.1 && mediaNotas <= 9.9) {
          mensagem = `Notão! Sua média é ${mediaNotas}!`;
          document.getElementById("situacaoAluno").style.color = 'green';
      } else if (mediaNotas === 10) {
          mensagem = "Hoje é seu aniversário? Porque você está de parabéns! 10 de média";
          document.getElementById("situacaoAluno").style.color = 'green';
      } else if (mediaNotas < 0 || mediaNotas > 10) {
        alert(`Por favor, digite apenas números no intervalo entre 0 e 10.`);
      }

    // evite mexer na linha de código abaixo!
    document.getElementById("situacaoAluno").innerHTML = mensagem;
}

function limparCamposProjeto2() {
  var camposProjeto1 = document.querySelectorAll('#projeto2 input[type="number"]');
  camposProjeto1.forEach(function (campo) {
      campo.value = '';
  });
  document.getElementById('nota1').textContent = '';
  document.getElementById('nota2').textContent = '';
  document.getElementById('nota3').textContent = '';
  document.getElementById('nota4').textContent = '';
}