const questions = [
    { question: "日", options: ["sol", "lua", "estrela", "terra"], correct: "sol" },
    { question: "月", options: ["sol", "lua", "estrela", "terra"], correct: "lua" },
    { question: "水", options: ["fogo", "terra", "água", "ar"], correct: "água" },
    { question: "火", options: ["fogo", "terra", "água", "ar"], correct: "fogo" },
    { question: "木", options: ["árvore", "flor", "pedra", "bicho"], correct: "árvore" },
    { question: "金", options: ["prata", "ouro", "ferro", "cobre"], correct: "ouro" },
    { question: "土", options: ["terra", "pedra", "areia", "rocha"], correct: "terra" },
    { question: "人", options: ["homem", "mulher", "pessoa", "animal"], correct: "pessoa" },
    { question: "大", options: ["grande", "pequeno", "médio", "enorme"], correct: "grande" },
    { question: "小", options: ["grande", "pequeno", "médio", "minúsculo"], correct: "pequeno" },
    { question: "上", options: ["baixo", "acima", "aqui", "frente"], correct: "acima" },
    { question: "下", options: ["baixo", "acima", "aqui", "frente"], correct: "baixo" },
    { question: "中", options: ["dentro", "fora", "ao lado", "meio"], correct: "meio" },
    { question: "千", options: ["mil", "milhão", "milhar", "centena"], correct: "mil" },
    { question: "万", options: ["mil", "milhão", "milhar", "dez mil"], correct: "dez mil" },
    { question: "時", options: ["hora", "minuto", "segundo", "dia"], correct: "hora" },
    { question: "分", options: ["hora", "minuto", "segundo", "dia"], correct: "minuto" },
    { question: "年", options: ["ano", "mês", "semestre", "dia"], correct: "ano" },
    { question: "今", options: ["hoje", "ontem", "agora", "amanhã"], correct: "agora" },
    { question: "先", options: ["passado", "futuro", "antes", "depois"], correct: "antes" },
    { question: "生", options: ["morte", "vida", "crescer", "ensinar"], correct: "vida" },
    { question: "学", options: ["ensinar", "aprender", "estudar", "sabedoria"], correct: "estudar" },
    { question: "友", options: ["amizade", "parceiro", "conhecimento", "aluno"], correct: "amizade" },
    { question: "会", options: ["reunião", "encontro", "empresa", "festa"], correct: "reunião" },
    { question: "見", options: ["ouvir", "falar", "ver", "tocar"], correct: "ver" },
    { question: "行", options: ["ir", "voltar", "ficar", "correr"], correct: "ir" },
    { question: "来", options: ["vir", "ir", "ficar", "voltar"], correct: "vir" },
    { question: "食", options: ["comer", "beber", "dormir", "viajar"], correct: "comer" },
    { question: "飲", options: ["beber", "comer", "falar", "escrever"], correct: "beber" },
    { question: "買", options: ["vender", "comprar", "trocar", "pegar"], correct: "comprar" },
    { question: "使", options: ["usar", "levar", "colocar", "tirar"], correct: "usar" },
    { question: "読", options: ["escrever", "falar", "ler", "comer"], correct: "ler" },
    { question: "書", options: ["escrever", "ler", "falar", "escutar"], correct: "escrever" },
    { question: "話", options: ["falar", "escutar", "escrever", "ler"], correct: "falar" },
    { question: "聞", options: ["escutar", "ver", "falar", "tocar"], correct: "escutar" },
    { question: "足", options: ["mão", "cabeça", "pé", "braço"], correct: "pé" },
    { question: "手", options: ["mão", "pé", "cabeça", "braço"], correct: "mão" },
    { question: "目", options: ["olho", "nariz", "boca", "orelha"], correct: "olho" },
    { question: "耳", options: ["boca", "olho", "nariz", "orelha"], correct: "orelha" },
    { question: "口", options: ["boca", "olho", "nariz", "orelha"], correct: "boca" },
    { question: "力", options: ["força", "fraqueza", "poder", "energia"], correct: "força" },
    { question: "休", options: ["descansar", "trabalhar", "estudar", "viajar"], correct: "descansar" },
    { question: "道", options: ["caminho", "floresta", "montanha", "rua"], correct: "caminho" },
    { question: "学校", options: ["escola", "hospital", "loja", "rua"], correct: "escola" },
    { question: "店", options: ["loja", "escola", "casa", "avenida"], correct: "loja" },
    { question: "車", options: ["carro", "ônibus", "trem", "avião"], correct: "carro" },
    { question: "電", options: ["eletricidade", "água", "fogo", "terra"], correct: "eletricidade" },
    { question: "話", options: ["falar", "escutar", "escrever", "ler"], correct: "falar" }
];

// Função para embaralhar as perguntas (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Pega um índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Embaralha as perguntas
const shuffledQuestions = shuffleArray(questions);

let score = 0;
let currentQuestionIndex = 0;
let lives = 5;  // Número de vidas do jogador

// Sons de resposta
const correctSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
const incorrectSound = new Audio('https://www.soundjay.com/button/beep-08b.wav');

function displayQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const options = document.getElementById("options");
    options.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });

    // Atualiza o número de vidas
    document.getElementById("lives").textContent = `Vidas: ${lives}`;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
        correctSound.play();
    } else {
        lives--;  // Subtrai uma vida se a resposta estiver errada
        incorrectSound.play();
    }

    document.getElementById("scoreValue").textContent = score;

    currentQuestionIndex++;

    // Se as vidas acabaram, termina o quiz
    if (lives <= 0) {
        alert("Você perdeu todas as suas vidas! O quiz foi finalizado.");
    } else if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion();
    } else {
        alert("Quiz finalizado! Sua pontuação final é: " + score);
    }
}

// Iniciar o quiz
displayQuestion();
