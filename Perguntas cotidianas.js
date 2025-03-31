const questions = [
    { 
        question: "お元気ですか?", 
        answer: "Como vai você?", 
        options: ["Como vai você?", "Onde fica o banheiro?", "Qual é seu nome?", "Quanto custa isso?"] 
    },
    { 
        question: "ありがとう", 
        answer: "Obrigado", 
        options: ["Obrigado", "Desculpe", "Sim", "Não"] 
    },
    { 
        question: "すみません", 
        answer: "Desculpe", 
        options: ["Desculpe", "Bom dia", "Boa noite", "Por favor"] 
    },
    { 
        question: "お疲れ様です", 
        answer: "Bom trabalho", 
        options: ["Bom trabalho", "Até logo", "Boa sorte", "Com licença"] 
    },
    { 
        question: "はい", 
        answer: "Sim", 
        options: ["Sim", "Não", "Talvez", "Por favor"] 
    },
    { 
        question: "いいえ", 
        answer: "Não", 
        options: ["Não", "Sim", "Talvez", "Com licença"] 
    },
    { 
        question: "どういたしまして", 
        answer: "De nada", 
        options: ["De nada", "Desculpe", "Por favor", "Com licença"] 
    },
    { 
        question: "おはようございます", 
        answer: "Bom dia", 
        options: ["Bom dia", "Boa noite", "Boa tarde", "Até logo"] 
    },
    { 
        question: "さようなら", 
        answer: "Adeus", 
        options: ["Adeus", "Oi", "Com licença", "Tudo bem"] 
    },
    { 
        question: "ごめんなさい", 
        answer: "Desculpe", 
        options: ["Desculpe", "Obrigado", "Oi", "Até logo"] 
    },
    { 
        question: "これをください", 
        answer: "Por favor, me dê isso", 
        options: ["Por favor, me dê isso", "Quanto custa?", "Onde fica o banheiro?", "Você fala inglês?"] 
    },
    { 
        question: "日本へようこそ", 
        answer: "Bem-vindo ao Japão", 
        options: ["Bem-vindo ao Japão", "Bom dia", "Qual é o seu nome?", "Quanto custa isso?"] 
    },
    { 
        question: "今日はいい天気ですね", 
        answer: "Hoje está um bom tempo, né?", 
        options: ["Hoje está um bom tempo, né?", "Como você está?", "O que é isso?", "Onde está o banheiro?"] 
    },
    { 
        question: "トイレはどこですか?", 
        answer: "Onde fica o banheiro?", 
        options: ["Onde fica o banheiro?", "Qual é o seu nome?", "Você fala inglês?", "Quanto custa isso?"] 
    }
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
