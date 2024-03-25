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


document.addEventListener('DOMContentLoaded', function () {

  toggleButton.addEventListener('click', function () {
    toggleButton.style.display = 'none';
    question1Div.classList.remove('hidden');
    counterdiv.classList.remove('hidden');
  });

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


submitButton.addEventListener('click', function () {

  const initials = initialsInput.value.trim();

  if (initials !== '') {
    localStorage.setItem('userInitials', initials); 
    alert('Initials submitted successfully!');
    initialsInput.value = '';
  } else {
    alert('Please enter your initials.');
  }
 localStorage.getItem(initials);
});
