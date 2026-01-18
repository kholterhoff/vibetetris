// Vocabulary words organized into units of 10 words each
const vocabularyUnits = [
    {
        unitNumber: 1,
        unitName: "Amazing Adventures",
        words: [
            { word: "AMAZE", definition: "To surprise someone very much", sentence: "The magic trick will amaze everyone at the party!", wrongAnswers: ["To make someone angry", "To run very fast", "To eat quickly"] },
            { word: "BRAVE", definition: "Not afraid of danger", sentence: "The brave firefighter rescued the cat from the tree.", wrongAnswers: ["Very tired", "Always hungry", "Likes to sleep"] },
            { word: "CURIOUS", definition: "Wanting to know or learn about things", sentence: "The curious kitten explored every corner of the house.", wrongAnswers: ["Feeling sleepy", "Being mean", "Always sad"] },
            { word: "DISCOVER", definition: "To find something for the first time", sentence: "Scientists discover new things about space every day.", wrongAnswers: ["To lose something", "To break something", "To forget something"] },
            { word: "ESCAPE", definition: "To get away from something", sentence: "The rabbit tried to escape from the garden.", wrongAnswers: ["To catch something", "To buy something", "To cook something"] },
            { word: "IMAGINE", definition: "To create pictures in your mind", sentence: "Close your eyes and imagine you're flying like a bird.", wrongAnswers: ["To forget things", "To run fast", "To eat food"] },
            { word: "JOURNEY", definition: "A trip from one place to another", sentence: "Our journey to grandma's house takes three hours.", wrongAnswers: ["A type of food", "A kind of animal", "A game to play"] },
            { word: "MIGHTY", definition: "Very strong and powerful", sentence: "The mighty oak tree survived the big storm.", wrongAnswers: ["Very weak", "Very small", "Very slow"] },
            { word: "PRECIOUS", definition: "Very valuable or special", sentence: "This necklace is precious because it belonged to my grandmother.", wrongAnswers: ["Worthless", "Garbage", "Broken"] },
            { word: "VISION", definition: "The ability to see", sentence: "Eagles have excellent vision and can see far away.", wrongAnswers: ["The ability to hear", "The ability to smell", "The ability to taste"] }
        ]
    },
    {
        unitNumber: 2,
        unitName: "Describing the World",
        words: [
            { word: "ENORMOUS", definition: "Very, very big", sentence: "The elephant was enormous compared to the mouse.", wrongAnswers: ["Very tiny", "Very colorful", "Very old"] },
            { word: "GIGANTIC", definition: "Extremely large", sentence: "The gigantic dinosaur skeleton filled the whole museum room.", wrongAnswers: ["Very small", "Just right", "Medium sized"] },
            { word: "TINY", definition: "Very small", sentence: "The tiny ant carried a crumb bigger than itself.", wrongAnswers: ["Very big", "Medium sized", "Gigantic"] },
            { word: "CALM", definition: "Peaceful and quiet", sentence: "The lake was calm and still this morning.", wrongAnswers: ["Very loud", "Moving fast", "Feeling sick"] },
            { word: "RAPID", definition: "Very fast", sentence: "The rabbit made a rapid escape from the fox.", wrongAnswers: ["Very slow", "Standing still", "Moving backward"] },
            { word: "PECULIAR", definition: "Strange or unusual", sentence: "The cat made a peculiar sound when it saw the bird.", wrongAnswers: ["Very normal", "Completely regular", "Just like everything"] },
            { word: "ORDINARY", definition: "Normal or usual", sentence: "It was just an ordinary day until we found a treasure map!", wrongAnswers: ["Very special", "Super rare", "Really weird"] },
            { word: "UNIQUE", definition: "One of a kind, special", sentence: "Every snowflake is unique and different from the others.", wrongAnswers: ["Just like everything else", "Very common", "Boring and usual"] },
            { word: "VACANT", definition: "Empty, not being used", sentence: "The house next door has been vacant for months.", wrongAnswers: ["Completely full", "Very crowded", "Packed tight"] },
            { word: "SCARCE", definition: "Not enough of something", sentence: "Water becomes scarce in the desert during hot summers.", wrongAnswers: ["Too much of something", "Just the right amount", "Everywhere you look"] }
        ]
    },
    {
        unitNumber: 3,
        unitName: "Feelings & Emotions",
        words: [
            { word: "AMUSING", definition: "Funny or entertaining", sentence: "The clown's silly tricks were very amusing to watch.", wrongAnswers: ["Very scary", "Bright and colorful", "Difficult to understand"] },
            { word: "DROWSY", definition: "Feeling sleepy", sentence: "I feel drowsy after eating a big lunch.", wrongAnswers: ["Feeling excited", "Feeling angry", "Feeling hungry"] },
            { word: "GRATEFUL", definition: "Feeling thankful", sentence: "I'm grateful for my family and friends.", wrongAnswers: ["Feeling mad", "Feeling bored", "Feeling lost"] },
            { word: "GREEDY", definition: "Wanting more than you need", sentence: "Don't be greedy - share the cookies with your brother.", wrongAnswers: ["Sharing everything", "Being generous", "Helping others"] },
            { word: "KEEN", definition: "Very interested or eager", sentence: "She was keen to start her new art project.", wrongAnswers: ["Not caring at all", "Very sleepy", "Always angry"] },
            { word: "PLEASANT", definition: "Nice or enjoyable", sentence: "We had a pleasant time at the park today.", wrongAnswers: ["Very mean", "Really bad", "Super scary"] },
            { word: "GENTLE", definition: "Soft and kind", sentence: "Be gentle when you pet the baby bunny.", wrongAnswers: ["Rough and mean", "Fast and loud", "Cold and wet"] },
            { word: "HONEST", definition: "Truthful and doesn't lie", sentence: "It's important to be honest and tell the truth.", wrongAnswers: ["Always lying", "Never talking", "Very loud"] },
            { word: "FOOLISH", definition: "Not smart or silly", sentence: "It would be foolish to go outside without a coat in winter.", wrongAnswers: ["Very wise", "Always right", "Super smart"] },
            { word: "SPLENDID", definition: "Wonderful or excellent", sentence: "You did a splendid job on your art project!", wrongAnswers: ["Terrible", "Awful", "Really bad"] }
        ]
    },
    {
        unitNumber: 4,
        unitName: "Action Words",
        words: [
            { word: "ANNOY", definition: "To bother or irritate someone", sentence: "Please don't annoy your sister while she's reading.", wrongAnswers: ["To help someone", "To teach someone", "To play with someone"] },
            { word: "ARRANGE", definition: "To put things in order", sentence: "Can you arrange your toys neatly on the shelf?", wrongAnswers: ["To throw things away", "To hide things", "To lose things"] },
            { word: "AVOID", definition: "To stay away from something", sentence: "Try to avoid stepping in the puddles.", wrongAnswers: ["To find something", "To chase after something", "To collect something"] },
            { word: "CLASSIFY", definition: "To put things into groups", sentence: "We can classify animals by how many legs they have.", wrongAnswers: ["To throw things", "To color things", "To count things"] },
            { word: "HARVEST", definition: "To gather crops from a farm", sentence: "Farmers harvest corn and wheat in the fall.", wrongAnswers: ["To plant seeds", "To water plants", "To sleep outside"] },
            { word: "INSIST", definition: "To say something firmly", sentence: "Mom will insist that we clean our rooms before playing.", wrongAnswers: ["To whisper quietly", "To give up easily", "To run away"] },
            { word: "NOTICE", definition: "To see or become aware of something", sentence: "Did you notice the colorful rainbow in the sky?", wrongAnswers: ["To ignore everything", "To sleep deeply", "To run quickly"] },
            { word: "OBSERVE", definition: "To watch carefully", sentence: "Let's observe the ants as they build their hill.", wrongAnswers: ["To look away", "To close eyes", "To hide quickly"] },
            { word: "SUGGEST", definition: "To give an idea", sentence: "I suggest we have pizza for dinner tonight.", wrongAnswers: ["To refuse everything", "To take away", "To break something"] },
            { word: "VANISH", definition: "To disappear suddenly", sentence: "The magician made the rabbit vanish into thin air!", wrongAnswers: ["To appear slowly", "To grow bigger", "To stay forever"] }
        ]
    },
    {
        unitNumber: 5,
        unitName: "Thinking & Learning",
        words: [
            { word: "ANALYZE", definition: "To study something carefully", sentence: "Let's analyze the bug under the microscope.", wrongAnswers: ["To break something", "To draw a picture", "To sing a song"] },
            { word: "DESCRIBE", definition: "To tell what something is like", sentence: "Can you describe what your new puppy looks like?", wrongAnswers: ["To eat something", "To run away", "To climb up"] },
            { word: "ESTIMATE", definition: "To make a careful guess", sentence: "Can you estimate how many jellybeans are in the jar?", wrongAnswers: ["To know for sure", "To give up", "To start over"] },
            { word: "EXPECT", definition: "To think something will happen", sentence: "I expect it will rain later because of the dark clouds.", wrongAnswers: ["To forget everything", "To feel scared", "To be confused"] },
            { word: "PREDICT", definition: "To say what will happen in the future", sentence: "Can you predict who will win the race?", wrongAnswers: ["To forget the past", "To sleep now", "To eat lunch"] },
            { word: "QUESTION", definition: "Something you ask", sentence: "Raise your hand if you have a question about the story.", wrongAnswers: ["An answer you give", "A game you play", "A song you sing"] },
            { word: "RECOGNIZE", definition: "To know who someone is or what something is", sentence: "I didn't recognize you in your Halloween costume!", wrongAnswers: ["To forget everything", "To be confused", "To run away"] },
            { word: "SIMPLE", definition: "Easy to do or understand", sentence: "This puzzle is simple enough for young children.", wrongAnswers: ["Very hard", "Super confusing", "Really difficult"] },
            { word: "DETAIL", definition: "A small part or piece of information", sentence: "She drew every detail of the butterfly's wings.", wrongAnswers: ["A large ocean", "A tall mountain", "A fast car"] },
            { word: "INVISIBLE", definition: "Cannot be seen", sentence: "Air is invisible but we can feel it when the wind blows.", wrongAnswers: ["Very bright", "Super loud", "Really big"] }
        ]
    },
    {
        unitNumber: 6,
        unitName: "More Great Words",
        words: [
            { word: "CAUSE", definition: "To make something happen", sentence: "Heavy rain can cause floods in the streets.", wrongAnswers: ["To stop something", "To watch something", "To forget something"] },
            { word: "COMMUNITY", definition: "A group of people living in the same area", sentence: "Our community is having a fun fair this weekend.", wrongAnswers: ["A type of animal", "A kind of food", "A big building"] },
            { word: "CYCLE", definition: "A series of events that repeat", sentence: "The water cycle shows how rain comes from clouds.", wrongAnswers: ["A type of tree", "A loud noise", "A kind of weather"] },
            { word: "EXERCISE", definition: "Physical activity to stay healthy", sentence: "Running and jumping are good forms of exercise.", wrongAnswers: ["Eating candy", "Watching TV", "Taking a nap"] },
            { word: "FAMOUS", definition: "Known by many people", sentence: "The famous singer performed at our town's concert.", wrongAnswers: ["Unknown to everyone", "Very small", "Always quiet"] },
            { word: "HABITAT", definition: "The natural home of an animal or plant", sentence: "The ocean is the habitat of dolphins and whales.", wrongAnswers: ["A type of food", "A kind of toy", "A school subject"] },
            { word: "LIBERTY", definition: "Freedom to do things", sentence: "We have the liberty to choose our own books to read.", wrongAnswers: ["Being locked up", "Feeling sick", "Running slowly"] },
            { word: "STURDY", definition: "Strong and won't break easily", sentence: "We need a sturdy ladder to reach the roof.", wrongAnswers: ["Weak and fragile", "Soft and squishy", "Light as air"] },
            { word: "TEXTURE", definition: "How something feels when you touch it", sentence: "The smooth texture of silk feels nice on my skin.", wrongAnswers: ["How something tastes", "How something sounds", "How something thinks"] },
            { word: "TREMENDOUS", definition: "Very large or great", sentence: "The team made a tremendous effort to win the game.", wrongAnswers: ["Very tiny", "Very boring", "Very quiet"] },
            { word: "VALUABLE", definition: "Worth a lot, important", sentence: "This old coin is very valuable to collectors.", wrongAnswers: ["Worthless", "Useless", "Trash"] }
        ]
    }
];

// Mascot characters without outfits
const mascots = {
    lion: { emoji: "🦁", name: "Leo" },
    panda: { emoji: "🐼", name: "Penny" },
    fox: { emoji: "🦊", name: "Freddy" }
};

// Game state
let selectedMascot = null;
let selectedUnit = null;
let currentQuestion = null;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let questionsAnswered = 0;
let currentWordIndex = 0;
let wrongWords = []; // Track words that were answered incorrectly

// Web Speech API
const synth = window.speechSynthesis;

// DOM elements
const mascotSelectionElement = document.getElementById('mascotSelection');
const unitSelectionElement = document.getElementById('unitSelection');
const gameContainerElement = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const correctElement = document.getElementById('correct');
const totalElement = document.getElementById('total');
const currentWordElement = document.getElementById('currentWord');
const exampleSentenceElement = document.getElementById('exampleSentence');
const speakerButtonElement = document.getElementById('speakerButton');
const answersGridElement = document.getElementById('answersGrid');
const mascotElement = document.getElementById('mascot');
const speechBubbleElement = document.getElementById('speechBubble');
const progressFillElement = document.getElementById('progressFill');
const unitTitleElement = document.getElementById('unitTitle');

// Overlay elements
const celebrationOverlayElement = document.getElementById('celebrationOverlay');
const celebrationMascotElement = document.getElementById('celebrationMascot');
const celebrationMessageElement = document.getElementById('celebrationMessage');
const wrongOverlayElement = document.getElementById('wrongOverlay');
const wrongMascotElement = document.getElementById('wrongMascot');
const revealAnswerElement = document.getElementById('revealAnswer');
const revealWordElement = document.getElementById('revealWord');
const revealDefinitionElement = document.getElementById('revealDefinition');
const continueButtonElement = document.getElementById('continueButton');
const unitCompleteOverlayElement = document.getElementById('unitCompleteOverlay');
const unitCompleteMascotElement = document.getElementById('unitCompleteMascot');
const unitCompleteScoreElement = document.getElementById('unitCompleteScore');
const unitCompleteMessageElement = document.getElementById('unitCompleteMessage');
const chooseAnotherUnitButtonElement = document.getElementById('chooseAnotherUnitButton');
const celebrationParticlesElement = document.getElementById('celebrationParticles');

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

// Text to speech function - removes emojis before speaking
function speakText(text) {
    // Cancel any ongoing speech to prevent overlap
    synth.cancel();

    // Remove all emojis and special characters
    const cleanText = text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();

    if (!cleanText) return; // Don't speak if nothing left after removing emojis

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9; // Slightly slower for kids
    utterance.pitch = 1.1; // Slightly higher pitch
    utterance.volume = 1;

    synth.speak(utterance);
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

// Create massive confetti
function createMassiveConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#a29bfe', '#fd79a8', '#ff8787', '#74b9ff'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -20 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 15 + 10) + 'px';
        confetti.style.height = (Math.random() * 15 + 10) + 'px';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        celebrationParticlesElement.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Create star burst
function createStarBurst() {
    const stars = ['⭐', '🌟', '✨', '💫', '🌠'];
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star-burst';
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 0.3 + 's';
        celebrationParticlesElement.appendChild(star);

        setTimeout(() => star.remove(), 2000);
    }
}

// Mascot selection
function setupMascotSelection() {
    const selectButtons = document.querySelectorAll('.select-button');
    selectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const mascotChoice = e.target.closest('.mascot-choice');
            const mascotType = mascotChoice.dataset.mascot;
            selectMascot(mascotType);
        });
    });
}

function selectMascot(mascotType) {
    selectedMascot = mascots[mascotType];
    mascotSelectionElement.style.display = 'none';
    unitSelectionElement.style.display = 'flex';

    // Update all mascot displays
    mascotElement.textContent = selectedMascot.emoji;
    celebrationMascotElement.textContent = selectedMascot.emoji;
    wrongMascotElement.textContent = selectedMascot.emoji;
    unitCompleteMascotElement.textContent = selectedMascot.emoji;

    setupUnitSelection();
}

// Unit selection
function setupUnitSelection() {
    const unitsContainer = document.getElementById('unitsContainer');
    unitsContainer.innerHTML = '';

    // Create unit buttons
    vocabularyUnits.forEach(unit => {
        const unitButton = document.createElement('button');
        unitButton.className = 'unit-button';
        unitButton.innerHTML = `
            <div class="unit-number">Unit ${unit.unitNumber}</div>
            <div class="unit-name">${unit.unitName}</div>
            <div class="unit-words">${unit.words.length} words</div>
        `;
        unitButton.onclick = () => selectUnit(unit.unitNumber);
        unitsContainer.appendChild(unitButton);
    });

    // Add "Surprise Me" button
    const surpriseButton = document.createElement('button');
    surpriseButton.className = 'unit-button surprise-button';
    surpriseButton.innerHTML = `
        <div class="surprise-icon">🎲</div>
        <div class="unit-name">Surprise Me!</div>
        <div class="unit-words">Random unit</div>
    `;
    surpriseButton.onclick = () => {
        const randomUnit = Math.floor(Math.random() * vocabularyUnits.length) + 1;
        selectUnit(randomUnit);
    };
    unitsContainer.appendChild(surpriseButton);
}

function selectUnit(unitNumber) {
    selectedUnit = vocabularyUnits.find(u => u.unitNumber === unitNumber);
    unitSelectionElement.style.display = 'none';
    gameContainerElement.style.display = 'block';

    // Display unit info
    unitTitleElement.textContent = `Unit ${selectedUnit.unitNumber}: ${selectedUnit.unitName}`;

    // Speak welcome message (only text, no emojis)
    const welcomeMessage = `Hi! I'm ${selectedMascot.name}! Let's learn the words in ${selectedUnit.unitName}!`;
    speechBubbleElement.textContent = `Let's learn ${selectedUnit.unitName}!`;
    speakText(welcomeMessage);

    setTimeout(() => {
        initGame();
    }, 2000);
}

// Update progress bar
function updateProgress() {
    const progress = (questionsAnswered / 10) * 100;
    progressFillElement.style.width = progress + '%';
}

// Get a new question
function getNewQuestion() {
    let wordData;

    // First, check if we have words to re-test (wrong answers from 2-3 questions ago)
    if (wrongWords.length > 0 && questionsAnswered >= 3) {
        // Find words that were answered wrong 2-3 questions ago
        const eligibleWords = wrongWords.filter(w => {
            const questionsSince = questionsAnswered - w.lastAsked;
            return questionsSince >= 2 && questionsSince <= 4;
        });

        if (eligibleWords.length > 0) {
            // Pick one of the eligible wrong words to re-test
            const wrongWord = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
            wordData = selectedUnit.words.find(w => w.word === wrongWord.word);
            wrongWord.lastAsked = questionsAnswered;
        }
    }

    // If no re-test word, get the next word in sequence
    if (!wordData && currentWordIndex < selectedUnit.words.length) {
        wordData = selectedUnit.words[currentWordIndex];
        currentWordIndex++;
    }

    // If we've gone through all words and no re-tests, unit is complete
    if (!wordData) {
        showUnitComplete();
        return;
    }

    // Shuffle answers
    const allAnswers = [wordData.definition, ...wordData.wrongAnswers];
    const shuffledAnswers = shuffle(allAnswers);

    currentQuestion = {
        word: wordData.word,
        correctAnswer: wordData.definition,
        sentence: wordData.sentence,
        answers: shuffledAnswers
    };

    displayQuestion();
}

// Display the current question
function displayQuestion() {
    currentWordElement.textContent = currentQuestion.word;
    exampleSentenceElement.textContent = `"${currentQuestion.sentence}"`;
    answersGridElement.innerHTML = '';

    // Speak ONLY the word and sentence automatically (emojis removed in speakText function)
    setTimeout(() => {
        speakText(`${currentQuestion.word}. ${currentQuestion.sentence}`);
    }, 300);

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, button);
        answersGridElement.appendChild(button);
    });
}

// Speaker button to replay audio
speakerButtonElement.addEventListener('click', () => {
    speakText(`${currentQuestion.word}. ${currentQuestion.sentence}`);
});

// Show celebration overlay (NO audio for celebration text)
function showCelebration(message) {
    celebrationMessageElement.textContent = message;
    celebrationOverlayElement.classList.add('active');
    createMassiveConfetti();
    createStarBurst();
    playCorrectSound();

    // NO speaking of celebration message - just show visually

    setTimeout(() => {
        celebrationOverlayElement.classList.remove('active');
    }, 2000);
}

// Show wrong answer overlay
function showWrongAnswer() {
    revealAnswerElement.textContent = currentQuestion.correctAnswer;
    revealWordElement.textContent = currentQuestion.word;
    revealDefinitionElement.textContent = currentQuestion.correctAnswer;
    wrongOverlayElement.classList.add('active');
    playIncorrectSound();

    // Speak ONLY the correct answer explanation (emojis removed automatically)
    speakText(`${currentQuestion.word} means ${currentQuestion.correctAnswer}.`);
}

// Continue from wrong answer
continueButtonElement.addEventListener('click', () => {
    synth.cancel(); // Stop any ongoing speech
    wrongOverlayElement.classList.remove('active');
    setTimeout(() => {
        getNewQuestion();
    }, 500);
});

// Show unit complete overlay
function showUnitComplete() {
    unitCompleteScoreElement.textContent = score;

    const percentage = Math.round((correctAnswers / totalAnswers) * 100);
    let message;
    if (percentage >= 90) {
        message = "Amazing job! You're a vocabulary superstar!";
    } else if (percentage >= 70) {
        message = "Great work! You're learning so much!";
    } else {
        message = "Good effort! Keep practicing!";
    }
    unitCompleteMessageElement.textContent = message;

    unitCompleteOverlayElement.classList.add('active');
    playLevelUpSound();
    createMassiveConfetti();
    createStarBurst();

    // Mascot announces completion (emojis removed automatically)
    speakText(`Unit complete! Your score is ${score} points. ${message}`);
}

// Choose another unit
chooseAnotherUnitButtonElement.addEventListener('click', () => {
    synth.cancel(); // Stop any ongoing speech
    unitCompleteOverlayElement.classList.remove('active');
    gameContainerElement.style.display = 'none';
    unitSelectionElement.style.display = 'flex';

    // Reset for new unit
    currentWordIndex = 0;
    wrongWords = [];
    questionsAnswered = 0;
});

// Check if answer is correct
function checkAnswer(selectedAnswer, button) {
    totalAnswers++;
    totalElement.textContent = totalAnswers;
    questionsAnswered++;

    // Disable all buttons
    const allButtons = document.querySelectorAll('.answer-button');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Correct answer
        correctAnswers++;
        correctElement.textContent = correctAnswers;

        streak++;
        streakElement.textContent = streak;

        // Points based on streak
        const points = 100 + (streak * 10);
        score += points;
        scoreElement.textContent = score;

        // Remove from wrong words if it was there
        wrongWords = wrongWords.filter(w => w.word !== currentQuestion.word);

        // Show celebration (NO audio for celebration message)
        const messages = ["AWESOME", "FANTASTIC", "BRILLIANT", "AMAZING", "PERFECT", "WONDERFUL"];
        const message = messages[Math.floor(Math.random() * messages.length)];
        showCelebration(message);

        updateProgress();

        setTimeout(() => {
            getNewQuestion();
        }, 2500);

    } else {
        // Wrong answer
        streak = 0;
        streakElement.textContent = streak;

        // Add to wrong words for re-testing
        const existingWrong = wrongWords.find(w => w.word === currentQuestion.word);
        if (existingWrong) {
            existingWrong.timesWrong++;
            existingWrong.lastAsked = questionsAnswered;
        } else {
            wrongWords.push({
                word: currentQuestion.word,
                timesWrong: 1,
                lastAsked: questionsAnswered
            });
        }

        // Show wrong answer overlay
        setTimeout(() => {
            showWrongAnswer();
        }, 1000);
    }
}

// Initialize the game
function initGame() {
    score = 0;
    streak = 0;
    correctAnswers = 0;
    totalAnswers = 0;
    questionsAnswered = 0;
    currentWordIndex = 0;
    wrongWords = [];

    scoreElement.textContent = score;
    streakElement.textContent = streak;
    correctElement.textContent = correctAnswers;
    totalElement.textContent = totalAnswers;

    updateProgress();
    getNewQuestion();
}

// Start with mascot selection
window.addEventListener('load', () => {
    setupMascotSelection();
});
