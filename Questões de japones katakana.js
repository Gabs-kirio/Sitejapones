const questions = [
    {
        question: "コンピュータ",
        options: ["konpyuuta", "denki", "terebi", "ramen"],
        correct: "konpyuuta"
    },
    {
        question: "テレビ",
        options: ["terebi", "denwa", "pasokon", "neko"],
        correct: "terebi"
    },
    {
        question: "パソコン",
        options: ["pasokon", "denki", "konpyuuta", "neko"],
        correct: "pasokon"
    },
    {
        question: "カメラ",
        options: ["kamera", "kawa", "neko", "tabemono"],
        correct: "kamera"
    },
    {
        question: "サッカー",
        options: ["sakkaa", "tennisu", "futoboru", "baseboru"],
        correct: "sakkaa"
    },
    {
        question: "バナナ",
        options: ["banana", "ringo", "kaki", "suika"],
        correct: "banana"
    },
    {
        question: "アイスクリーム",
        options: ["aisukuriimu", "gyuunyuu", "keeki", "tabemono"],
        correct: "aisukuriimu"
    },
    {
        question: "スカート",
        options: ["sukaato", "suit", "kimono", "fuku"],
        correct: "sukaato"
    },
    {
        question: "チョコレート",
        options: ["chokoreeto", "aisu", "kurimu", "raamen"],
        correct: "chokoreeto"
    },
    {
        question: "ホテル",
        options: ["hoteru", "ryokan", "kissa", "tabemono"],
        correct: "hoteru"
    },
    {
        question: "メニュー",
        options: ["menyuu", "tabemono", "omotenashi", "ryouri"],
        correct: "menyuu"
    },
    {
        question: "デパート",
        options: ["depaato", "ichiba", "sumika", "kutsu"],
        correct: "depaato"
    },
    {
        question: "レストラン",
        options: ["resutoran", "kafe", "mura", "tabemono"],
        correct: "resutoran"
    },
    {
        question: "ジュース",
        options: ["juusu", "kohi", "mizu", "ocha"],
        correct: "juusu"
    },
    {
        question: "タクシー",
        options: ["takushii", "basu", "jidousha", "denwa"],
        correct: "takushii"
    },
    {
        question: "バス",
        options: ["basu", "takushii", "kuruma", "dare"],
        correct: "basu"
    },
    {
        question: "カラオケ",
        options: ["karaoke", "ondokei", "piano", "guitar"],
        correct: "karaoke"
    },
    {
        question: "ビール",
        options: ["biiru", "sake", "ocha", "washi"],
        correct: "biiru"
    },
    {
        question: "シャンプー",
        options: ["shanpuu", "kaminari", "kirei", "tenshi"],
        correct: "shanpuu"
    },
    {
        question: "エアコン",
        options: ["eakon", "denki", "kaze", "atmosfera"],
        correct: "eakon"
    },
    {
        question: "カメラマン",
        options: ["kameraman", "shashin", "eizou", "rekishi"],
        correct: "kameraman"
    },
    {
        question: "メガネ",
        options: ["megane", "tokkuri", "shita", "kami"],
        correct: "megane"
    },
    {
        question: "ソファ",
        options: ["sofa", "tansu", "dougu", "kagu"],
        correct: "sofa"
    },
    {
        question: "ピアノ",
        options: ["piano", "koto", "shamisen", "guitar"],
        correct: "piano"
    },
    {
        question: "コンビニ",
        options: ["konbini", "tabemono", "ichiba", "suupaa"],
        correct: "konbini"
    },
    {
        question: "ハンバーガー",
        options: ["hanbaagaa", "ramen", "sushi", "udon"],
        correct: "hanbaagaa"
    },
    {
        question: "ケーキ",
        options: ["keeki", "tabemono", "keki", "aisu"],
        correct: "keeki"
    },
    {
        question: "スーツ",
        options: ["suutsu", "fuku", "kimono", "tabemono"],
        correct: "suutsu"
    },
    {
        question: "スープ",
        options: ["suupu", "men", "udon", "onigiri"],
        correct: "suupu"
    },
    {
        question: "レコード",
        options: ["rekoodo", "ondo", "ongaku", "biiru"],
        correct: "rekoodo"
    },
    {
        question: "スカイツリー",
        options: ["sukaitsuri", "tennou", "tori", "neko"],
        correct: "sukaitsuri"
    },
    {
        question: "ロボット",
        options: ["robotto", "ningyou", "tetsujin", "kumo"],
        correct: "robotto"
    },
    {
        question: "トマト",
        options: ["tomato", "kabocha", "ringo", "suika"],
        correct: "tomato"
    },
    {
        question: "ノート",
        options: ["nooto", "pen", "gakki", "tokei"],
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
