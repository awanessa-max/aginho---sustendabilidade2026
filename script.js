const quiz = [
  {
    pergunta: "Qual prática ajuda a reduzir o desperdício de água?",
    opcoes: ["Lavar calçada com mangueira", "Reutilizar água da chuva", "Deixar torneira aberta"],
    resposta: "Reutilizar água da chuva"
  },
  {
    pergunta: "Qual atitude contribui para a preservação do solo?",
    opcoes: ["Queimar restos de plantio", "Rotação de culturas", "Uso excessivo de agrotóxicos"],
    resposta: "Rotação de culturas"
  },
  {
    pergunta: "Qual ação urbana ajuda o campo?",
    opcoes: ["Separar lixo reciclável", "Jogar óleo no ralo", "Desperdiçar alimentos"],
    resposta: "Separar lixo reciclável"
  }
];

const quizContainer = document.getElementById("quiz-container");
const resultado = document.getElementById("resultado");
const submitButton = document.getElementById("submit");

function carregarQuiz() {
  quiz.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${q.pergunta}</p>`;
    q.opcoes.forEach(opcao => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opcao}"> ${opcao}
        </label><br>`;
    });
    quizContainer.appendChild(div);
  });
}

function verificarRespostas() {
  let score = 0;
  quiz.forEach((q, index) => {
    const respostaSelecionada = document.querySelector(`input[name="q${index}"]:checked`);
    if (respostaSelecionada && respostaSelecionada.value === q.resposta) {
      score++;
    }
  });
  resultado.textContent = `Você acertou ${score} de ${quiz.length} questões!`;
}

carregarQuiz();
submitButton.addEventListener("click", verificarRespostas);
