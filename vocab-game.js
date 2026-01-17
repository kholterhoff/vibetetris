// Vocabulary words for 2nd graders with definitions
const vocabularyWords = [
    { word: "AMAZE", definition: "To surprise someone very much", wrongAnswers: ["To make someone angry", "To run very fast", "To eat quickly"] },
    { word: "AMUSING", definition: "Funny or entertaining", wrongAnswers: ["Very scary", "Bright and colorful", "Difficult to understand"] },
    { word: "ANALYZE", definition: "To study something carefully", wrongAnswers: ["To break something", "To draw a picture", "To sing a song"] },
    { word: "ANNOY", definition: "To bother or irritate someone", wrongAnswers: ["To help someone", "To teach someone", "To play with someone"] },
    { word: "ARRANGE", definition: "To put things in order", wrongAnswers: ["To throw things away", "To hide things", "To lose things"] },
    { word: "AVOID", definition: "To stay away from something", wrongAnswers: ["To find something", "To chase after something", "To collect something"] },
    { word: "BRAVE", definition: "Not afraid of danger", wrongAnswers: ["Very tired", "Always hungry", "Likes to sleep"] },
    { word: "CALM", definition: "Peaceful and quiet", wrongAnswers: ["Very loud", "Moving fast", "Feeling sick"] },
    { word: "CAUSE", definition: "To make something happen", wrongAnswers: ["To stop something", "To watch something", "To forget something"] },
    { word: "CLASSIFY", definition: "To put things into groups", wrongAnswers: ["To throw things", "To color things", "To count things"] },
    { word: "COMMUNITY", definition: "A group of people living in the same area", wrongAnswers: ["A type of animal", "A kind of food", "A big building"] },
    { word: "CURIOUS", definition: "Wanting to know or learn about things", wrongAnswers: ["Feeling sleepy", "Being mean", "Always sad"] },
    { word: "CYCLE", definition: "A series of events that repeat", wrongAnswers: ["A type of tree", "A loud noise", "A kind of weather"] },
    { word: "DESCRIBE", definition: "To tell what something is like", wrongAnswers: ["To eat something", "To run away", "To climb up"] },
    { word: "DETAIL", definition: "A small part or piece of information", wrongAnswers: ["A large ocean", "A tall mountain", "A fast car"] },
    { word: "DISCOVER", definition: "To find something for the first time", wrongAnswers: ["To lose something", "To break something", "To forget something"] },
    { word: "DROWSY", definition: "Feeling sleepy", wrongAnswers: ["Feeling excited", "Feeling angry", "Feeling hungry"] },
    { word: "ENORMOUS", definition: "Very, very big", wrongAnswers: ["Very tiny", "Very colorful", "Very old"] },
    { word: "ESCAPE", definition: "To get away from something", wrongAnswers: ["To catch something", "To buy something", "To cook something"] },
    { word: "ESTIMATE", definition: "To make a careful guess", wrongAnswers: ["To know for sure", "To give up", "To start over"] },
    { word: "EXERCISE", definition: "Physical activity to stay healthy", wrongAnswers: ["Eating candy", "Watching TV", "Taking a nap"] },
    { word: "EXPECT", definition: "To think something will happen", wrongAnswers: ["To forget everything", "To feel scared", "To be confused"] },
    { word: "FAMOUS", definition: "Known by many people", wrongAnswers: ["Unknown to everyone", "Very small", "Always quiet"] },
    { word: "FOOLISH", definition: "Not smart or silly", wrongAnswers: ["Very wise", "Always right", "Super smart"] },
    { word: "GENTLE", definition: "Soft and kind", wrongAnswers: ["Rough and mean", "Fast and loud", "Cold and wet"] },
    { word: "GIGANTIC", definition: "Extremely large", wrongAnswers: ["Very small", "Just right", "Medium sized"] },
    { word: "GRATEFUL", definition: "Feeling thankful", wrongAnswers: ["Feeling mad", "Feeling bored", "Feeling lost"] },
    { word: "GREEDY", definition: "Wanting more than you need", wrongAnswers: ["Sharing everything", "Being generous", "Helping others"] },
    { word: "HABITAT", definition: "The natural home of an animal or plant", wrongAnswers: ["A type of food", "A kind of toy", "A school subject"] },
    { word: "HARVEST", definition: "To gather crops from a farm", wrongAnswers: ["To plant seeds", "To water plants", "To sleep outside"] },
    { word: "HONEST", definition: "Truthful and doesn't lie", wrongAnswers: ["Always lying", "Never talking", "Very loud"] },
    { word: "IMAGINE", definition: "To create pictures in your mind", wrongAnswers: ["To forget things", "To run fast", "To eat food"] },
    { word: "INSIST", definition: "To say something firmly", wrongAnswers: ["To whisper quietly", "To give up easily", "To run away"] },
    { word: "INVISIBLE", definition: "Cannot be seen", wrongAnswers: ["Very bright", "Super loud", "Really big"] },
    { word: "JOURNEY", definition: "A trip from one place to another", wrongAnswers: ["A type of food", "A kind of animal", "A game to play"] },
    { word: "KEEN", definition: "Very interested or eager", wrongAnswers: ["Not caring at all", "Very sleepy", "Always angry"] },
    { word: "LIBERTY", definition: "Freedom to do things", wrongAnswers: ["Being locked up", "Feeling sick", "Running slowly"] },
    { word: "MIGHTY", definition: "Very strong and powerful", wrongAnswers: ["Very weak", "Very small", "Very slow"] },
    { word: "NOTICE", definition: "To see or become aware of something", wrongAnswers: ["To ignore everything", "To sleep deeply", "To run quickly"] },
    { word: "OBSERVE", definition: "To watch carefully", wrongAnswers: ["To look away", "To close eyes", "To hide quickly"] },
    { word: "ORDINARY", definition: "Normal or usual", wrongAnswers: ["Very special", "Super rare", "Really weird"] },
    { word: "PECULIAR", definition: "Strange or unusual", wrongAnswers: ["Very normal", "Completely regular", "Just like everything"] },
    { word: "PLEASANT", definition: "Nice or enjoyable", wrongAnswers: ["Very mean", "Really bad", "Super scary"] },
    { word: "PRECIOUS", definition: "Very valuable or special", wrongAnswers: ["Worthless", "Garbage", "Broken"] },
    { word: "PREDICT", definition: "To say what will happen in the future", wrongAnswers: ["To forget the past", "To sleep now", "To eat lunch"] },
    { word: "QUESTION", definition: "Something you ask", wrongAnswers: ["An answer you give", "A game you play", "A song you sing"] },
    { word: "RAPID", definition: "Very fast", wrongAnswers: ["Very slow", "Standing still", "Moving backward"] },
    { word: "RECOGNIZE", definition: "To know who someone is or what something is", wrongAnswers: ["To forget everything", "To be confused", "To run away"] },
    { word: "SCARCE", definition: "Not enough of something", wrongAnswers: ["Too much of something", "Just the right amount", "Everywhere you look"] },
    { word: "SIMPLE", definition: "Easy to do or understand", wrongAnswers: ["Very hard", "Super confusing", "Really difficult"] },
    { word: "SPLENDID", definition: "Wonderful or excellent", wrongAnswers: ["Terrible", "Awful", "Really bad"] },
    { word: "STURDY", definition: "Strong and won't break easily", wrongAnswers: ["Weak and fragile", "Soft and squishy", "Light as air"] },
    { word: "SUGGEST", definition: "To give an idea", wrongAnswers: ["To refuse everything", "To take away", "To break something"] },
    { word: "TEXTURE", definition: "How something feels when you touch it", wrongAnswers: ["How something tastes", "How something sounds", "How something thinks"] },
    { word: "TINY", definition: "Very small", wrongAnswers: ["Very big", "Medium sized", "Gigantic"] },
    { word: "TREMENDOUS", definition: "Very large or great", wrongAnswers: ["Very tiny", "Very boring", "Very quiet"] },
    { word: "UNIQUE", definition: "One of a kind, special", wrongAnswers: ["Just like everything else", "Very common", "Boring and usual"] },
    { word: "VACANT", definition: "Empty, not being used", wrongAnswers: ["Completely full", "Very crowded", "Packed tight"] },
    { word: "VALUABLE", definition: "Worth a lot, important", wrongAnswers: ["Worthless", "Useless", "Trash"] },
    { word: "VANISH", definition: "To disappear suddenly", wrongAnswers: ["To appear slowly", "To grow bigger", "To stay forever"] },
    { word: "VISION", definition: "The ability to see", wrongAnswers: ["The ability to hear", "The ability to smell", "The ability to taste"] }
];

// Animal mascots that change as you progress
const mascots = ["🦁", "🐼", "🦊", "🐸", "🐨", "🦄", "🐯", "🐻", "🦉", "🐰"];

// Encouraging messages
const correctMessages = [
    "AWESOME! 🌟",
    "FANTASTIC! 🎉",
    "YOU'RE A STAR! ⭐",
    "BRILLIANT! 💡",
    "AMAZING JOB! 🎊",
    "SUPER SMART! 🧠",
    "YOU GOT IT! ✨",
    "PERFECT! 💯",
    "WONDERFUL! 🎈",
    "SPECTACULAR! 🌈"
];

const incorrectMessages = [
    "Oops! Try again! 💪",
    "Not quite, keep going! 🌟",
    "Nice try! You'll get it! 🎯",
    "Almost! Keep learning! 📚"
];

// Game state
let currentQuestion = null;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let questionsAnswered = 0;
let usedWords = [];

// DOM elements
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const correctElement = document.getElementById('correct');
const totalElement = document.getElementById('total');
const currentWordElement = document.getElementById('currentWord');
const answersGridElement = document.getElementById('answersGrid');
const mascotElement = document.getElementById('mascot');
const speechBubbleElement = document.getElementById('speechBubble');
const progressFillElement = document.getElementById('progressFill');
const celebrationElement = document.getElementById('celebration');

// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'sine') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function playCorrectSound() {
    playSound(523.25, 0.1); // C5
    setTimeout(() => playSound(659.25, 0.1), 100); // E5
    setTimeout(() => playSound(783.99, 0.2), 200); // G5
}

function playIncorrectSound() {
    playSound(196, 0.3, 'sawtooth'); // G3
}

function playLevelUpSound() {
    playSound(523.25, 0.1);
    setTimeout(() => playSound(659.25, 0.1), 100);
    setTimeout(() => playSound(783.99, 0.1), 200);
    setTimeout(() => playSound(1046.50, 0.3), 300); // C6
}

// Shuffle array
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#a29bfe', '#fd79a8'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        celebrationElement.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Update mascot based on progress
function updateMascot() {
    const mascotIndex = Math.floor(questionsAnswered / 5) % mascots.length;
    mascotElement.textContent = mascots[mascotIndex];
}

// Update progress bar
function updateProgress() {
    const progress = (questionsAnswered % 10) * 10;
    progressFillElement.style.width = progress + '%';

    if (questionsAnswered > 0 && questionsAnswered % 10 === 0) {
        playLevelUpSound();
        createConfetti();
        speechBubbleElement.textContent = "🎉 LEVEL UP! You're doing GREAT! 🎉";
        setTimeout(() => {
            speechBubbleElement.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        }, 2000);
    }
}

// Get a new question
function getNewQuestion() {
    // Reset used words if we've gone through all of them
    if (usedWords.length >= vocabularyWords.length) {
        usedWords = [];
    }

    // Get unused word
    const availableWords = vocabularyWords.filter(w => !usedWords.includes(w.word));
    const wordData = availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWords.push(wordData.word);

    // Shuffle answers
    const allAnswers = [wordData.definition, ...wordData.wrongAnswers];
    const shuffledAnswers = shuffle(allAnswers);

    currentQuestion = {
        word: wordData.word,
        correctAnswer: wordData.definition,
        answers: shuffledAnswers
    };

    displayQuestion();
}

// Display the current question
function displayQuestion() {
    currentWordElement.textContent = currentQuestion.word;
    answersGridElement.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, button);
        answersGridElement.appendChild(button);
    });
}

// Check if answer is correct
function checkAnswer(selectedAnswer, button) {
    totalAnswers++;
    totalElement.textContent = totalAnswers;

    // Disable all buttons
    const allButtons = document.querySelectorAll('.answer-button');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Correct answer
        button.classList.add('correct');
        correctAnswers++;
        correctElement.textContent = correctAnswers;

        streak++;
        streakElement.textContent = streak;

        // Points based on streak
        const points = 100 + (streak * 10);
        score += points;
        scoreElement.textContent = score;

        playCorrectSound();

        mascotElement.classList.add('celebrate');
        setTimeout(() => mascotElement.classList.remove('celebrate'), 600);

        speechBubbleElement.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];

        questionsAnswered++;
        updateMascot();
        updateProgress();

        // Small confetti for correct answer
        if (streak % 3 === 0) {
            createConfetti();
        }

    } else {
        // Wrong answer
        button.classList.add('incorrect');

        // Highlight correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            }
        });

        streak = 0;
        streakElement.textContent = streak;

        playIncorrectSound();

        mascotElement.classList.add('sad');
        setTimeout(() => mascotElement.classList.remove('sad'), 600);

        speechBubbleElement.textContent = incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
    }

    // Next question after delay
    setTimeout(() => {
        getNewQuestion();
    }, 2500);
}

// Initialize the game
function initGame() {
    score = 0;
    streak = 0;
    correctAnswers = 0;
    totalAnswers = 0;
    questionsAnswered = 0;
    usedWords = [];

    scoreElement.textContent = score;
    streakElement.textContent = streak;
    correctElement.textContent = correctAnswers;
    totalElement.textContent = totalAnswers;

    updateMascot();
    speechBubbleElement.textContent = "Let's learn some words!";

    getNewQuestion();
}

// Start the game when page loads
window.addEventListener('load', () => {
    initGame();
});
