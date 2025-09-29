const questions = [
    {
        question: "コンピュータ",
        options: ["denki", "konpyuuta", "terebi", "ramen"],
        correct: "konpyuuta"
    },
    {
        question: "テレビ",
        options: ["denwa", "pasokon", "terebi", "neko"],
        correct: "terebi"
    },
    {
        question: "パソコン",
        options: ["denki", "konpyuuta", "neko", "pasokon"],
        correct: "pasokon"
    },
    {
        question: "カメラ",
        options: ["kawa", "kamera", "neko", "tabemono"],
        correct: "kamera"
    },
    {
        question: "サッカー",
        options: ["tennisu", "sakkaa", "futoboru", "baseboru"],
        correct: "sakkaa"
    },
    {
        question: "バナナ",
        options: ["ringo", "banana", "kaki", "suika"],
        correct: "banana"
    },
    {
        question: "アイスクリーム",
        options: ["gyuunyuu", "keeki", "aisukuriimu", "tabemono"],
        correct: "aisukuriimu"
    },
    {
        question: "スカート",
        options: ["suit", "kimono", "sukaato", "fuku"],
        correct: "sukaato"
    },
    {
        question: "チョコレート",
        options: ["aisu", "chokoreeto", "kurimu", "raamen"],
        correct: "chokoreeto"
    },
    {
        question: "ホテル",
        options: ["ryokan", "hoteru", "kissa", "tabemono"],
        correct: "hoteru"
    },
    {
        question: "メニュー",
        options: ["menyuu", "tabemono", "omotenashi", "ryouri"],
        correct: "menyuu"
    },
    {
        question: "デパート",
        options: ["ichiba", "sumika", "depaato", "kutsu"],
        correct: "depaato"
    },
    {
        question: "レストラン",
        options: ["resutoran", "kafe", "mura", "tabemono"],
        correct: "resutoran"
    },
    {
        question: "ジュース",
        options: ["kohi", "juusu", "mizu", "ocha"],
        correct: "juusu"
    },
    {
        question: "タクシー",
        options: ["basu", "jidousha", "denwa", "takushii"],
        correct: "takushii"
    },
    {
        question: "バス",
        options: ["takushii", "kuruma", "dare", "basu"],
        correct: "basu"
    },
    {
        question: "カラオケ",
        options: ["ondokei", "karaoke", "piano", "guitar"],
        correct: "karaoke"
    },
    {
        question: "ビール",
        options: ["sake", "biiru", "ocha", "washi"],
        correct: "biiru"
    },
    {
        question: "シャンプー",
        options: ["kaminari", "shanpuu", "kirei", "tenshi"],
        correct: "shanpuu"
    },
    {
        question: "エアコン",
        options: ["denki", "kaze", "eakon", "atmosfera"],
        correct: "eakon"
    },
    {
        question: "カメラマン",
        options: ["shashin", "kameraman", "eizou", "rekishi"],
        correct: "kameraman"
    },
    {
        question: "メガネ",
        options: ["tokkuri", "megane", "shita", "kami"],
        correct: "megane"
    },
    {
        question: "ソファ",
        options: ["sofa", "tansu", "dougu", "kagu"],
        correct: "sofa"
    },
    {
        question: "ピアノ",
        options: ["koto", "piano", "shamisen", "guitar"],
        correct: "piano"
    },
    {
        question: "コンビニ",
        options: ["tabemono", "konbini", "ichiba", "suupaa"],
        correct: "konbini"
    },
    {
        question: "ハンバーガー",
        options: ["ramen", "hanbaagaa", "sushi", "udon"],
        correct: "hanbaagaa"
    },
    {
        question: "ケーキ",
        options: ["tabemono", "keeki", "keki", "aisu"],
        correct: "keeki"
    },
    {
        question: "スーツ",
        options: ["fuku", "kimono", "suutsu", "tabemono"],
        correct: "suutsu"
    },
    {
        question: "スープ",
        options: ["men", "suupu", "udon", "onigiri"],
        correct: "suupu"
    },
    {
        question: "レコード",
        options: ["ondo", "rekoodo", "ongaku", "biiru"],
        correct: "rekoodo"
    },
    {
        question: "スカイツリー",
        options: ["tennou", "tori", "sukaitsuri", "neko"],
        correct: "sukaitsuri"
    },
    {
        question: "ロボット",
        options: ["ningyou", "robotto", "tetsujin", "kumo"],
        correct: "robotto"
    },
    {
        question: "トマト",
        options: ["kabocha", "ringo", "tomato", "suika"],
        correct: "tomato"
    },
    {
        question: "ノート",
        options: ["pen", "gakki", "nooto", "tokei"],
        correct: "nooto"
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

