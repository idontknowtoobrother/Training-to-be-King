let correctAnswer = null
let gameData = [
    {
        imageSource: 'tiger',
        answers: ['Tiger', 'Cat'],
        correctAnswer: 'Tiger'
    },
    {
        imageSource: 'key',
        answers: ['Key', 'Apple'],
        correctAnswer: 'Key'
    }
]

function shffleArray(array){
    return array.sort(() => 0.5 - Math.random())
}

function checkAnswer(word){
    if(word !== correctAnswer){
        window.location = './defeat.html'
        return 
    }
    return runGame()
}

function runGame() {
    if(gameData.length < 1){
        window.location = './correct_math.html'
        return
    }

    gameData = shffleArray(gameData)

    let quest = gameData.pop()

    document.getElementById('questImage').innerHTML = `<img src="./resources/${quest.imageSource}.png" alt="">`

    let answersOne = shffleArray(quest.answers).pop()
    let answersTwo = shffleArray(quest.answers).pop()
    correctAnswer = quest.correctAnswer
    document.getElementById('answerBtn').innerHTML = `
        <button onclick="checkAnswer('${answersOne}')">${answersOne}</button> 
        <button onclick="checkAnswer('${answersTwo}')">${answersTwo}</button>
    `
}