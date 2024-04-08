let startGameButton= document.querySelector('.start-quiz');
let questionsDiv= document.querySelector('.questions-div');
let answersDiv= document.querySelector('.answers-div');
let questionText=document.querySelector('.question');
let nextQuestionButton= document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame);
nextQuestionButton.addEventListener('click', displayNextQuestion);

let currentQuestionIndex= 0

function startGame() {
    startGameButton.classList.add('hide');
    questionsDiv.classList.remove('hide');
    displayNextQuestion();
}

function displayNextQuestion() {
    hideButtons();


    questionText.textContent= questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer =>{
        let rightAnswer= document.createElement('button')
        rightAnswer.classList.add('button', 'answer')
        rightAnswer.textContent= answer.option

        if (answer.correct) {
            rightAnswer.dataset.correct = answer.correct
        }

        answersDiv.appendChild(rightAnswer);

        rightAnswer.addEventListener('click', pickAnswer)

    })

}

function hideButtons() {
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild)
    }

}

function pickAnswer(event) {

    document.querySelectorAll('.answer').forEach(button=>{
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled=true
    })

    nextQuestionButton.classList.remove('hide');
    currentQuestionIndex++
}

let questions = [
    {
        question: 'Who placed Harry Potter name in the Globet of Fire?',
        answers: [
           {option: 'Barty Crouch Jr.', correct: true},
           {option:'Hermione Granger', correct: false},
           {option:'Alastor Moody', correct:false},
           {option:'Bertemious Crouch Sr.', correct:false} 
        ]
    },
    {
        question: 'What is profesors Snape patronus??',
        answers: [
           {option: 'A snake', correct: false},
           {option:'A crow', correct: false},
           {option:'A doe', correct:true},
           {option:'A crocodile', correct:false} 
        ]

    },
    {question: 'Where was Hermione when mountain troll showed up in Hogwarts?',
    answers: [
       {option: 'Bathroom', correct: false},
       {option:'Kitchen', correct: true},
       {option:'Great Hall', correct:false},
       {option:'Gryffindor Common Room', correct:false} 
    ]},
    {
        question: 'What was an actual charm that helped Gilderoy Lockhart become so famous?',
        answers: [
           {option: 'Expecto Patronum', correct: false},
           {option:'Obliviate', correct: true},
           {option:'Expelliarmus', correct:false},
           {option:'Alohomora', correct:false} 
        ]
    },
    {
        question: 'What Narcissa Malfoy asked Snape to do?',
        answers: [
           {option: 'Clean his house', correct: false},
           {option:'Help her son', correct: true},
           {option:'Kiss her', correct:false},
           {option:'Kill Harry Potter', correct:false} 
        ]
    },
    {
        question: 'What is the name of a newspaper that belongs to Luna Lovesgood dad?',
        answers: [
           {option: 'Witch Weekly', correct: false},
           {option:'The Daily Prophet', correct: false},
           {option:'The Quibbler', correct:true},
           {option:'Wizarding Weekly', correct:false} 
        ]
    },
   {
    question: 'Who killed Nagini?',
    answers: [
       {option: 'Hermione Granger', correct: false},
       {option:'Harry Potter', correct: false},
       {option:'Ron Weasley', correct:false},
       {option:'Neville Longbottom', correct:true} 
    ]
   },
   {
    question: 'What did the second brother choose in the Tale of Three Brothers?',
    answers: [
       {option: 'The Resurection Stone', correct: true},
       {option:'The Elder Wand', correct: false},
       {option:'The Mirror of Erised', correct:false},
       {option:'The Invisibility Cloak', correct:false} 
    ]
   },
   {
    question: 'What was Siriu Black nickname while he was in Hogwarts?',
    answers: [
       {option: 'Padfoot', correct: true},
       {option:'Prongs', correct: false},
       {option:'Wormtail', correct:false},
       {option:'Moony', correct:false} 
    ]
   },
   {
    question: 'Which one of the Weasley children was the oldest?',
    answers: [
       {option: 'Ron', correct: false},
       {option:'Ginny', correct: false},
       {option:'Charlie', correct:false},
       {option:'Bill', correct:true} 
    ]
   }
]



