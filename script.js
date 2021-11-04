const quizDB = [
    {
        question: "Q-1 Who were Harry's parents?",
        a: "Henry and Maggie Potter",
        b: "Jakes and Lily Potter",
        c: "Severus and Lily Potter",
        d: "James and Lily Potter",
        ans: "ans4"
    },
    {
        question: "Q-2 Who are the muggle aunt and uncle that Harry must live with every summer?",
        a: "Ned and Camilla Diddly",
        b: "Ralph and Magnolia Dudley",
        c: "Vernon and Petunia Dursley",
        d: "Vernon and Petunia Dudley",
        ans: "ans3"
    },
    {
        question: "Q-3 In order of birth, who are the seven Weasley siblings?",
        a: "Bill, Charlie, Percy, Fred, George, Ron, Ginny",
        b: "Percy, Bill, George, Charlie, Fred, Ron, Ginny",
        c: "George, Fred, Percy, Bill, Charlie, Ron, Ginny",
        d: "George, Percy, Ron, Bill, Charlie, Fred, Ginny",
        ans: "ans1"
    },
    {
        question: "Q-4 What are the three Unforgivable Curses?",
        a: "Avada Kedavra, Crucio and Imperio",
        b: "Expelliarmus, Expecto Patronum and Diffindo",
        c: "Impedimenta, Incarcerous and Incendio",
        ans: "ans1"
    },
    {
        question: "Q-5 Which of these Hogwarts professors teaches Transfiguration?",
        a: "Snape",
        b: "McGonagall",
        c: "Sprout",
        d: "Dumbeldore",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = ` 
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onClick="location.reload()"> Play Again </button>
        `;


        showScore.classList.remove('scoreArea');

    }

    if(checkedAnswer == quizDB[questionCount].ans){
        alert("correct");
    }else{
        ("incorrect");
    }

});

function startTimer(){
      var time = new Date().getTime() + 1000*60*4;
      var interval = setInterval(function(){
        var now = new Date().getTime();
        var distance = time - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timer.innerHTML = minutes + " : " + seconds;
        if (distance <= 0) {
            clearInterval(interval);
            timer.innerHTML = "00:00";
            window.alert('Time Up!');
            showResults();
        }
      } ,1000);
  }