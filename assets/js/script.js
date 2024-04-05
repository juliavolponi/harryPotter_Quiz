let startGameButton= document.querySelector('.start-quiz');
let questionsDiv= document.querySelector('.questions-div');
let answersDiv= document.querySelector('.answers-div');

startGameButton.addEventListener('click', startGame)

function startGame() {
    startGameButton.classList.add('hide');
    questionsDiv.classList.remove('hide');
    displayNextQuestion();
}

function displayNextQuestion() {

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



