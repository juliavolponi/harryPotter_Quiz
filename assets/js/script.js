let startGameButton= document.querySelector('.start-quiz');
let questionsDiv= document.querySelector('.questions-div');

startGameButton.addEventListener('click', startGame)

function startGame() {
    startGameButton.classList.add('hide');
    questionsDiv.classList.remove('hide');
}



