const questions = [
    {
        question: "おはようございます",
        translation: "Bom dia",
        options: ["Boa noite", "Olá", "Bom dia", "Boa tarde"],
        correct: "Bom dia"
    },
    {
        question: "ありがとう",
        translation: "Obrigado",
        options: ["Desculpe", "Obrigado", "Por favor", "Adeus"],
        correct: "Obrigado"
    },
    {
        question: "さようなら",
        translation: "Adeus",
        options: ["Até logo", "Olá", "Adeus", "Bom dia"],
        correct: "Adeus"
    },
    {
        question: "お元気ですか",
        translation: "Como vai?",
        options: ["Onde você mora?", "Como vai?", "Que horas são?", "Você está bem?"],
        correct: "Como vai?"
    },
    {
        question: "すみません",
        translation: "Desculpe",
        options: ["Desculpe", "Obrigado", "Com licença", "De nada"],
        correct: "Desculpe"
    },
    {
        question: "いただきます",
        translation: "Bom apetite",
        options: ["Vamos comer", "Estou com fome", "A comida está boa", "Bom apetite"],
        correct: "Bom apetite"
    },
    {
        question: "ごちそうさまでした",
        translation: "Obrigado pela refeição",
        options: ["Comida", "Bom apetite", "Obrigado pela refeição", "Já comi"],
        correct: "Obrigado pela refeição"
    },
    {
        question: "はい",
        translation: "Sim",
        options: ["Não", "Sim", "Talvez", "Por favor"],
        correct: "Sim"
    },
    {
        question: "いいえ",
        translation: "Não",
        options: ["Sim", "Não", "Talvez", "Por favor"],
        correct: "Não"
    },
    {
        question: "すごい",
        translation: "Incrível",
        options: ["Feio", "Bonito", "Incrível", "Comum"],
        correct: "Incrível"
    },
    {
        question: "おやすみなさい",
        translation: "Boa noite",
        options: ["Boa tarde", "Boa noite", "Bom dia", "Até logo"],
        correct: "Boa noite"
    },
    {
        question: "こんにちは",
        translation: "Olá",
        options: ["Olá", "Boa noite", "Adeus", "Boa tarde"],
        correct: "Olá"
    },
    {
        question: "ありがとうごさいます",
        translation: "Muito obrigado",
        options: ["De nada", "Por favor", "Muito obrigado", "Desculpe"],
        correct: "Muito obrigado"
    },
    {
        question: "お疲れ様です",
        translation: "Bom trabalho",
        options: ["Obrigado pela refeição", "Bom trabalho", "Desculpe", "Como vai?"],
        correct: "Bom trabalho"
    },
    {
        question: "どういたしまして",
        translation: "De nada",
        options: ["De nada", "Por favor", "Obrigado", "Desculpe"],
        correct: "De nada"
    },
    {
        question: "何時ですか",
        translation: "Que horas são?",
        options: ["Onde é?", "Que horas são?", "Como vai?", "Qual é o seu nome?"],
        correct: "Que horas são?"
    },
    {
        question: "どこですか",
        translation: "Onde é?",
        options: ["Onde é?", "Que horas são?", "Como vai?", "O que você está fazendo?"],
        correct: "Onde é?"
    },
    {
        question: "どうぞ",
        translation: "Por favor",
        options: ["Obrigado", "Desculpe", "Por favor", "De nada"],
        correct: "Por favor"
    },
    {
        question: "いただけますか",
        translation: "Posso receber?",
        options: ["Posso receber?", "Você pode me ajudar?", "Onde é?", "Que horas são?"],
        correct: "Posso receber?"
    }
];

let score = 0;
let currentQuestionIndex = 0;

// Sons de resposta
const correctSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
const incorrectSound = new Audio('https://www.soundjay.com/button/beep-08b.wav');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("translation").textContent = `Tradução: ${currentQuestion.translation}`;

    const options = document.getElementById("options");
    options.innerHTML = "";  // Limpa as opções anteriores

    // Cria os botões para as opções
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
        correctSound.play();
    } else {
        incorrectSound.play();
    }
    document.getElementById("scoreValue").textContent = score;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz finalizado! Sua pontuação final é: " + score);
    }
}

// Iniciar o quiz
displayQuestion();
