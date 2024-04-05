let startGameButton= document.querySelector('.start-quiz');
let questionsDiv= document.querySelector('.questions-div');
let answersDiv= document.querySelector('.answers-div');
let questionText=document.querySelector('.question')

startGameButton.addEventListener('click', startGame);

let currentQuestionIndex= 0

function startGame() {
    startGameButton.classList.add('hide');
    questionsDiv.classList.remove('hide');
    displayNextQuestion();
}

function displayNextQuestion() {
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild)
    }

    questionText.textContent= questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer =>{
        let rightAnswer= document.createElement('button')
        rightAnswer.classList.add('button', 'answer')
        newAnswer.textContent= answer.text
        if (answer.correct) {
            rightAnswer.dataset.correct = answer.correct
        }

        answersDiv.appendChild(rightAnswer);

    })

}

let questions = [
    {
        question: 'primeira pergunta?',
        answers: [
           {option: 'a', correct: true},
           {option:'b', correct: false},
           {option:'c', correct:false},
           {option:'d', correct:false} 
        ]
    },
    {
        question: 'segunda pergunta?',
        answers: [
           {option: 'b', correct: true},
           {option:'a', correct: false},
           {option:'c', correct:false},
           {option:'d', correct:false} 
        ]

    },
    {question: 'terceira pergunta?',
    answers: [
       {option: 'd', correct: true},
       {option:'c', correct: false},
       {option:'a', correct:false},
       {option:'b', correct:false} 
    ]},
    {
        question: 'quarta pergunta?',
        answers: [
           {option: 'a', correct: true},
           {option:'b', correct: false},
           {option:'c', correct:false},
           {option:'d', correct:false} 
        ]
    },
    {
        question: 'quinta pergunta?',
        answers: [
           {option: 'a', correct: true},
           {option:'b', correct: false},
           {option:'c', correct:false},
           {option:'d', correct:false} 
        ]
    },
    {
        question: 'sexta pergunta?',
        answers: [
           {option: 'a', correct: true},
           {option:'b', correct: false},
           {option:'c', correct:false},
           {option:'d', correct:false} 
        ]
    },
   {
    question: 'setima pergunta?',
    answers: [
       {option: 'a', correct: true},
       {option:'b', correct: false},
       {option:'c', correct:false},
       {option:'d', correct:false} 
    ]
   },
   {
    question: 'oitava pergunta?',
    answers: [
       {option: 'a', correct: true},
       {option:'b', correct: false},
       {option:'c', correct:false},
       {option:'d', correct:false} 
    ]
   },
   {
    question: 'nona pergunta?',
    answers: [
       {option: 'a', correct: true},
       {option:'b', correct: false},
       {option:'c', correct:false},
       {option:'d', correct:false} 
    ]
   },
   {
    question: 'decima pergunta?',
    answers: [
       {option: 'a', correct: true},
       {option:'b', correct: false},
       {option:'c', correct:false},
       {option:'d', correct:false} 
    ]
   }
]



