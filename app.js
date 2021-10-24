var questions = [{
  question: "What city is this?",
  choices: ["Rome", "Madrid", "Amsterdam", "Budapest"],
  image_url: "assets/images/city/city1.jpg",
  correctAnswer: 3
},

{
  question: "What city are we looking at?",
  choices: ["Milaan", "Madrid", "Rome", "Monaco"],
  image_url: "assets/images/city/city2.jpg",
  correctAnswer: 2
},
{
  question: "Yes, tell me which city we are looking at:",
  choices: ["Toronto", "New York", "Chicago", "Montreal"],
  image_url: "assets/images/city/city3.jpg",
  correctAnswer: 0
},
{
  question: "What beautiful city is this?",
  choices: ["Singapore", "Kuala Lumpur", "Melbourne", "Jakarta"],
  image_url: "assets/images/city/city4.jpg",
  correctAnswer: 1
},
{
  question: "What city is this?",
  choices: ["Barcalona", "Nancy", "Paris", "Nantes"],
  image_url: "assets/images/city/city5.jpg",
  correctAnswer: 2
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var currentImage = 0;
var quizOver = false;




window.addEventListener('DOMContentLoaded', function(e) {
displayCurrentQuestion();

var quizMessage = document.querySelector('.quizMessage');

quizMessage.style.display = 'none';

document.querySelector('.nextButton').addEventListener('click', function() {

  if (!quizOver) {
      var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

      if (radioBtnsChecked === null) {
          quizMessage.innerText = 'First select your anwser...';
          quizMessage.style.display = 'block';
      } else {
          console.log(radioBtnsChecked.value);
          quizMessage.style.display = 'none';
          if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer) {
              correctAnswers++;
          }

          currentQuestion++;

          if (currentQuestion < questions.length) {
              displayCurrentQuestion();
          } else {
              displayScore();
              document.querySelector('.nextButton').innerText = 'Wanna play again???';
              quizOver = true;
          }
      }
  } else {
      quizOver = false;
      document.querySelector('.nextButton').innerText = 'Next Question';
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
  }
});
});

function displayCurrentQuestion() {
console.log('In display current Questions');

var question = questions[currentQuestion].question;
var imageUrl = questions[currentQuestion].image_url;
var questionClass = document.querySelector('.quizContainer > .question');
var choiceList = document.querySelector('.quizContainer > .choiceList');
var imageElement = document.getElementById('image');
var numChoices = questions[currentQuestion].choices.length;


questionClass.innerText = question;
imageElement.src = imageUrl;


choiceList.innerHTML = '';

var choice;
for (i = 0; i < numChoices; i++) {
  choice = questions[currentQuestion].choices[i];
  var li = document.createElement('li');
  li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
  choiceList.appendChild(li);

}
}
//Reset Quiz
function resetQuiz() {
currentQuestion = 0;
correctAnswers = 0;
hideScore();
}
//Your Score result
function displayScore() {
document.querySelector('.quizContainer').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length + ' Thank you for playing! ';
}

function hideScore() {
document.querySelector('.result').style.display = 'none';
}