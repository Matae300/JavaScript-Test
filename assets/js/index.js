const counterdiv = document.getElementById('counterdiv');
const countdown = document.getElementById('countdown');
const toggleButton = document.getElementById('toggleButton');
const question1 = document.getElementById('question-1');
const question1Div = document.getElementById('question1-Div');
const question2Div = document.getElementById('question2-Div');
const question2 = document.getElementById('question2');
const question3Div = document.getElementById('question3-Div');
const question3 = document.getElementById('question-3');
const doneDiv = document.getElementById('doneDiv');
const submitButton = document.getElementById('submit');
const initialsInput = document.getElementById('initials');

// when start quiz button is clicked counter is shown
document.addEventListener('DOMContentLoaded', function () {

  toggleButton.addEventListener('click', function () {
    toggleButton.style.display = 'none';
    question1Div.classList.remove('hidden');
    counterdiv.classList.remove('hidden');
  });
// counter starts at 75 and counts down, when user clicks on answer with the id of incorrect, time is subtracted by 10
  let countdownValue = 75;
  let countdownInterval;

  countdownInterval = setInterval(function () {
    countdownValue--;
    countdown.textContent = countdownValue;
    if (countdownValue <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('incorrect')) {
      countdownValue -= 10;
      countdown.textContent = countdownValue; 
    }
  });
});

//score starts at 0, if user clicks on correct answer score increases by 10
let score = 0;

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('correct')) {
    score += 10;
    countdown.textContent = score; 
  }
});

// when a answer is clicked on, that question and its answers are hidden and a new set appears
document.addEventListener('DOMContentLoaded', function () {

  question1Div.addEventListener('click', function () {
    question1Div.style.display = 'none';
    question2Div.classList.remove('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {

  question2Div.addEventListener('click', function () {
    question2Div.style.display = 'none';
    question3Div.classList.remove('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {

  question3Div.addEventListener('click', function () {
    question3Div.style.display = 'none';
    doneDiv.classList.remove('hidden');
  });
});

//stores both score and user initals 
submitButton.addEventListener('click', function () {
  const initials = initialsInput.value.trim();
  const score = countdown.textContent;

  if (initials && score !== '') {
    localStorage.setItem('userInitials', initials);
    localStorage.setItem('userScore', score);
    alert('Initials and score submitted successfully!');
    initialsInput.value = '';

  } else {
    alert('Please enter your initials and score.');
  }

  const storedInitials = localStorage.getItem('userInitials');
  const storedScore = localStorage.getItem('userScore');
  console.log('Stored Initials:', storedInitials);
  console.log('Stored Score:', storedScore);
});


document.addEventListener('DOMContentLoaded', function () {
  const resultsButton = document.getElementById('results');
  const highscoresParagraph = document.getElementById('highscores');

//when view scores button is clicked hidden class is removed
  resultsButton.addEventListener('click', function () {
    highscoresParagraph.classList.toggle('hidden');
    displayHighscores();
  });
// grabbing initals and score from local storage, if they exsist display the values, otherwise display no scores avaliable
  function displayHighscores() {
    const storedInitials = localStorage.getItem('userInitials');
    const storedScore = localStorage.getItem('userScore');

    if (storedInitials && storedScore) {
      highscoresParagraph.textContent = `Initials: ${storedInitials}, Score: ${storedScore}`;
    } else {
      highscoresParagraph.textContent = 'No scores available.';
    }
  }
});