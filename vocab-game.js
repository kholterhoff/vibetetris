// Vocabulary data - will be loaded from JSON file
let vocabularyData = null;
let allGrades = [];
let vocabularyUnits = [];
let selectedGrade = null;

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
const gradeSelectionElement = document.getElementById('gradeSelection');
const unitsSectionElement = document.getElementById('unitsSection');
const backToGradesButton = document.getElementById('backToGrades');
const gradeTitleElement = document.getElementById('gradeTitle');
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
const liveRegionElement = document.getElementById('liveRegion');

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

// Load vocabulary data from JSON
async function loadVocabularyData() {
    try {
        const response = await fetch('vocab-data.json');
        vocabularyData = await response.json();
        allGrades = vocabularyData.grades;
        console.log('Vocabulary data loaded:', allGrades.length, 'grades');
    } catch (error) {
        console.error('Error loading vocabulary data:', error);
        alert('Error loading vocabulary data. Please refresh the page.');
    }
}

// Accessibility: Announce to screen readers
function announceToScreenReader(message) {
    if (liveRegionElement) {
        liveRegionElement.textContent = message;
        // Clear after announcement to allow repeated announcements of same text
        setTimeout(() => {
            liveRegionElement.textContent = '';
        }, 1000);
    }
}

// Accessibility: Trap focus within modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    function handleTabKey(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }

    element.addEventListener('keydown', handleTabKey);
    if (firstFocusable) firstFocusable.focus();

    return () => element.removeEventListener('keydown', handleTabKey);
}

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

    announceToScreenReader(`${selectedMascot.name} selected as your adventure buddy!`);

    setupGradeSelection();
}

// Grade selection
function setupGradeSelection() {
    const gradesContainer = document.getElementById('gradesContainer');
    gradesContainer.innerHTML = '';

    // Show grade selection, hide units
    gradeSelectionElement.style.display = 'block';
    unitsSectionElement.style.display = 'none';

    // Create grade buttons
    allGrades.forEach(grade => {
        const gradeButton = document.createElement('button');
        gradeButton.className = 'grade-button';
        gradeButton.setAttribute('aria-label', `Select ${grade.gradeName}`);
        gradeButton.innerHTML = `
            <div class="grade-number">${grade.grade}</div>
            <div class="grade-label">${grade.gradeName}</div>
        `;
        gradeButton.onclick = () => selectGrade(grade);

        // Keyboard navigation
        gradeButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectGrade(grade);
            }
        });

        gradesContainer.appendChild(gradeButton);
    });

    announceToScreenReader(`${allGrades.length} grade levels available. Choose your grade level.`);
}

// Select a grade and show its units
function selectGrade(grade) {
    selectedGrade = grade;
    vocabularyUnits = grade.units;

    // Hide grades, show units
    gradeSelectionElement.style.display = 'none';
    unitsSectionElement.style.display = 'block';

    // Update title
    gradeTitleElement.textContent = `${grade.gradeName} - Choose a Unit!`;

    announceToScreenReader(`${grade.gradeName} selected. ${vocabularyUnits.length} units available.`);

    setupUnitButtons();

    // Focus on back button for accessibility
    if (backToGradesButton) {
        setTimeout(() => backToGradesButton.focus(), 100);
    }
}

// Back to grades button
if (backToGradesButton) {
    backToGradesButton.addEventListener('click', () => {
        setupGradeSelection();
        announceToScreenReader('Returned to grade selection');
    });
}

// Unit selection - show unit buttons
function setupUnitButtons() {
    const unitsContainer = document.getElementById('unitsContainer');
    unitsContainer.innerHTML = '';

    // Create unit buttons
    vocabularyUnits.forEach(unit => {
        const unitButton = document.createElement('button');
        unitButton.className = 'unit-button';
        unitButton.setAttribute('aria-label', `Unit ${unit.unitNumber}: ${unit.unitName}, ${unit.words.length} words`);
        unitButton.innerHTML = `
            <div class="unit-number">Unit ${unit.unitNumber}</div>
            <div class="unit-name">${unit.unitName}</div>
            <div class="unit-words">${unit.words.length} words</div>
        `;
        unitButton.onclick = () => selectUnit(unit.unitNumber);

        // Keyboard navigation
        unitButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectUnit(unit.unitNumber);
            }
        });

        unitsContainer.appendChild(unitButton);
    });

    // Add "Surprise Me" button
    const surpriseButton = document.createElement('button');
    surpriseButton.className = 'unit-button surprise-button';
    surpriseButton.setAttribute('aria-label', 'Surprise Me! Select a random unit');
    surpriseButton.innerHTML = `
        <div class="surprise-icon" aria-hidden="true">🎲</div>
        <div class="unit-name">Surprise Me!</div>
        <div class="unit-words">Random unit</div>
    `;
    surpriseButton.onclick = () => {
        const randomUnit = Math.floor(Math.random() * vocabularyUnits.length) + 1;
        selectUnit(randomUnit);
    };

    // Keyboard navigation
    surpriseButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const randomUnit = Math.floor(Math.random() * vocabularyUnits.length) + 1;
            selectUnit(randomUnit);
        }
    });

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

    announceToScreenReader(`Starting ${selectedUnit.unitName}. Get ready to learn!`);

    setTimeout(() => {
        initGame();
    }, 2000);
}

// Update progress bar
function updateProgress() {
    const progress = (questionsAnswered / 10) * 100;
    progressFillElement.style.width = progress + '%';

    // Update ARIA attributes for screen readers
    const progressBar = progressFillElement.parentElement;
    if (progressBar) {
        progressBar.setAttribute('aria-valuenow', Math.round(progress));
        progressBar.setAttribute('aria-label', `Unit progress: ${questionsAnswered} of 10 questions answered`);
    }
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

    // Announce question to screen reader
    announceToScreenReader(`Question ${questionsAnswered + 1}. What does ${currentQuestion.word} mean?`);

    // Speak ONLY the word and sentence automatically (emojis removed in speakText function)
    setTimeout(() => {
        speakText(`${currentQuestion.word}. ${currentQuestion.sentence}`);
    }, 300);

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.setAttribute('aria-label', `Answer choice: ${answer}`);
        button.onclick = () => checkAnswer(answer, button);

        // Keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkAnswer(answer, button);
            }
        });

        answersGridElement.appendChild(button);
    });

    // Focus on first answer button
    setTimeout(() => {
        const firstButton = answersGridElement.querySelector('button');
        if (firstButton) firstButton.focus();
    }, 500);
}

// Speaker button to replay audio
speakerButtonElement.addEventListener('click', () => {
    speakText(`${currentQuestion.word}. ${currentQuestion.sentence}`);
});

// Show celebration overlay (NO audio for celebration text)
function showCelebration(message) {
    celebrationMessageElement.textContent = message;
    celebrationOverlayElement.classList.add('active');
    celebrationOverlayElement.setAttribute('aria-hidden', 'false');
    createMassiveConfetti();
    createStarBurst();
    playCorrectSound();

    // Announce to screen reader
    announceToScreenReader(`Correct! ${message}`);

    // NO speaking of celebration message - just show visually

    setTimeout(() => {
        celebrationOverlayElement.classList.remove('active');
        celebrationOverlayElement.setAttribute('aria-hidden', 'true');
    }, 2000);
}

// Show wrong answer overlay
function showWrongAnswer() {
    revealAnswerElement.textContent = currentQuestion.correctAnswer;
    revealWordElement.textContent = currentQuestion.word;
    revealDefinitionElement.textContent = currentQuestion.correctAnswer;
    wrongOverlayElement.classList.add('active');
    wrongOverlayElement.setAttribute('aria-hidden', 'false');
    playIncorrectSound();

    // Announce to screen reader
    announceToScreenReader(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);

    // Speak ONLY the correct answer explanation (emojis removed automatically)
    speakText(`${currentQuestion.word} means ${currentQuestion.correctAnswer}.`);

    // Trap focus in modal and focus on continue button
    const removeFocusTrap = trapFocus(wrongOverlayElement);
    continueButtonElement.focus();

    // Store focus trap cleanup function
    wrongOverlayElement.dataset.removeFocusTrap = 'true';
}

// Continue from wrong answer
continueButtonElement.addEventListener('click', () => {
    synth.cancel(); // Stop any ongoing speech
    wrongOverlayElement.classList.remove('active');
    wrongOverlayElement.setAttribute('aria-hidden', 'true');
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
    unitCompleteOverlayElement.setAttribute('aria-hidden', 'false');
    playLevelUpSound();
    createMassiveConfetti();
    createStarBurst();

    // Announce to screen reader
    announceToScreenReader(`Unit complete! Your score is ${score} points. ${message}`);

    // Mascot announces completion (emojis removed automatically)
    speakText(`Unit complete! Your score is ${score} points. ${message}`);

    // Trap focus in modal and focus on button
    const removeFocusTrap = trapFocus(unitCompleteOverlayElement);
    setTimeout(() => chooseAnotherUnitButtonElement.focus(), 100);
}

// Choose another unit
chooseAnotherUnitButtonElement.addEventListener('click', () => {
    synth.cancel(); // Stop any ongoing speech
    unitCompleteOverlayElement.classList.remove('active');
    unitCompleteOverlayElement.setAttribute('aria-hidden', 'true');
    gameContainerElement.style.display = 'none';
    unitSelectionElement.style.display = 'flex';

    // Show the units section (not grade selection)
    gradeSelectionElement.style.display = 'none';
    unitsSectionElement.style.display = 'block';

    announceToScreenReader('Returned to unit selection. Choose another unit to continue learning.');

    // Reset for new unit
    currentWordIndex = 0;
    wrongWords = [];
    questionsAnswered = 0;

    // Rebuild unit buttons to ensure fresh state
    setupUnitButtons();
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

// Start with mascot selection after loading data
window.addEventListener('load', async () => {
    await loadVocabularyData();
    setupMascotSelection();
});
