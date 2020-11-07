const  beginButton = document.getElementById('startBtn')
beginButton.addEventListener('click', startGame)

//how do i reset the questions and the clock?
// const restart = document.getElementById('restartBtn')
// restart.addEventListener('click', startGame)

const start = document.querySelector('#startBtn');
const rules = document.querySelector('#rules');
const submit = document.querySelector('#submit');
const restart = document.querySelector('.buttons #restartBtn');
const continuE = document.querySelector('.buttons #continueBtn');
const beginPage = document.querySelector('.beginPage');
const quiz = document.querySelector('#quiz');
const heading = document.querySelector('#heading');
const quizContainer = document.querySelector('#quizContainer');
const Q1 = document.querySelector('#Q1');
const Q2 = document.querySelector('#Q2');
const Q3 = document.querySelector('#Q3');
const Q4 = document.querySelector('#Q4');
const Q5 = document.querySelector('#Q5');
const currentQuestionIndex = 0;



//when start button is clicked, hide begin page. FIRST ATTEMPT.

// startBtn.onclick = () =>{
//     function hide (beginPage){
//         beginPage = beginPage.length ? beginPage : [beginPage];
//         for (const index = 0; index < beginPage.length; index++){
//             beginPage[index].style.display = 'none';
//         }
//     }
// }

//when start button is clicked, hide the begin page. SECOND ATTEMPT.
//this should work. Not sure why it wont! I REMOVED THE ONCLICK FUNCTION FROM THE HTML.

// function myFunction() {
//     var x = document.getElementById("");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }





function startGame(){
    console.log('started');

    
    
    //TIMER
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function(){
        seconds--;
        (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        displayQuestion()
        
    },1000); 

    





//local storage

document.querySelector('#submitBtn').addEventListener('submit', function (event) {
    event.preventDefault();
    var initials = document.querySelector('#initials').value;
    localStorage.setItem(initials, timer);
    displayScores();
  });
   
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


