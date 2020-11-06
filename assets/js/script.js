var beginButton = document.getElementById('startBtn')
beginButton.addEventListener('click', startGame)


var quiz = document.querySelector('#quiz');
var heading = document.querySelector('#heading');
var quizContainer = document.querySelector('#quizContainer');
var Q1 = document.querySelector('#Q1');
var Q2 = document.querySelector('#Q2');
var Q3 = document.querySelector('#Q3');
var Q4 = document.querySelector('#Q4');
var Q5 = document.querySelector('#Q5');
var questions = 0;
var timer;
var timerInterval;
var display;


function showResults(){}
function buildQuiz(){}
buildQuiz();

function startGame(){
    console.log('started')
}










// /* when user clicks on begin 
// ON CLICK FUNCTION
// NEW SCREEN APPEARS
// the timer begins counting down from 60
// TIMER FUNCTION 
// a new screen pops up with question number 1 and the 4 possible answers are below it
// user can hover over the answer and when clicked
// FUNCTION NEW SCREEN  APPEARS with second question
// if the user answers a question incorrectly, the timer is reduced by five seconds
// FUNCTION REDUCE TIME BY FIVE SECONDS
// the user goes through the five questions until the end 
// with everyquestion user input is logged
// FUNCTION LOG USER INPUT SO AS TO TALLY TOTAL SCORE
// LEADER BOARD


