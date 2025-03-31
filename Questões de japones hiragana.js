const questions = [
    {
        question: "いぬ", // cão
        options: ["inu", "neko", "kuma", "nezu"], // opções de tradução
        correct: "inu"
    },
    {
        question: "ねこ", // gato
        options: ["neko", "inu", "saru", "tori"], // opções de tradução
        correct: "neko"
    },
    {
        question: "さくら", // flor de cerejeira
        options: ["sakura", "kiku", "ume", "momo"], // opções de tradução
        correct: "sakura"
    },
    {
        question: "とり", // pássaro
        options: ["tori", "neko", "saru", "kuma"], // opções de tradução
        correct: "tori"
    },
    {
        question: "あさ", // manhã
        options: ["asa", "yama", "sora", "mizu"], // opções de tradução
        correct: "asa"
    },
    {
        question: "やま", // montanha
        options: ["yama", "kawa", "kumo", "mi"], // opções de tradução
        correct: "yama"
    },
    {
        question: "かわ", // rio
        options: ["kawa", "sora", "yama", "neko"], // opções de tradução
        correct: "kawa"
    },
    {
        question: "さけ", // saquê (bebida japonesa)
        options: ["sake", "biiru", "mizu", "ocha"], // opções de tradução
        correct: "sake"
    },
    {
        question: "みず", // água
        options: ["mizu", "ocha", "biiru", "sake"], // opções de tradução
        correct: "mizu"
    },
    {
        question: "おちゃ", // chá
        options: ["ocha", "biiru", "sake", "mizu"], // opções de tradução
        correct: "ocha"
    },
    {
        question: "くるま", // carro
        options: ["kuruma", "mizu", "yama", "kawa"], // opções de tradução
        correct: "kuruma"
    },
    {
        question: "ねこ", // gato
        options: ["neko", "inu", "tori", "nezu"], // opções de tradução
        correct: "neko"
    },
    {
        question: "いえ", // casa
        options: ["ie", "machi", "tori", "nezu"], // opções de tradução
        correct: "ie"
    },
    {
        question: "まち", // cidade
        options: ["machi", "ie", "yama", "kawa"], // opções de tradução
        correct: "machi"
    },
    {
        question: "せんせい", // professor
        options: ["sensei", "gakusei", "nyuugaku", "kare"], // opções de tradução
        correct: "sensei"
    },
    {
        question: "がくせい", // estudante
        options: ["gakusei", "sensei", "shukudai", "kareshi"], // opções de tradução
        correct: "gakusei"
    },
    {
        question: "ひと", // pessoa
        options: ["hito", "neko", "kuma", "inu"], // opções de tradução
        correct: "hito"
    },
    {
        question: "ともだち", // amigo
        options: ["tomodachi", "gakkou", "sensei", "hito"], // opções de tradução
        correct: "tomodachi"
    },
    {
        question: "たべる", // comer
        options: ["taberu", "nomu", "kiku", "kawa"], // opções de tradução
        correct: "taberu"
    },
    {
        question: "のむ", // beber
        options: ["nomu", "taberu", "kiku", "mizu"], // opções de tradução
        correct: "nomu"
    },
    {
        question: "きく", // ouvir
        options: ["kiku", "taberu", "nomu", "yomu"], // opções de tradução
        correct: "kiku"
    },
    {
        question: "よむ", // ler
        options: ["yomu", "tabe", "nomu", "mizu"], // opções de tradução
        correct: "yomu"
    },
    {
        question: "おおきい", // grande
        options: ["ookii", "chiisai", "takai", "yasui"], // opções de tradução
        correct: "ookii"
    },
    {
        question: "ちいさい", // pequeno
        options: ["chiisai", "takai", "yasui", "ookii"], // opções de tradução
        correct: "chiisai"
    }
];

// Função para embaralhar as respostas (algoritmo de Fisher-Yates)
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

    // Embaralha as opções de resposta antes de exibi-las
    const shuffledOptions = shuffleArray(currentQuestion.options);

    shuffledOptions.forEach(option => {
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
