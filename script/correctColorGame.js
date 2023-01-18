const colorArray = [
    '#FFE249',
    '#9DFF7A',
    '#FFFFFF',
]
let correctAnswer
let totalPass = colorArray.length
let lastRandomList = []

function checkAnswer(color){
    if(color != correctAnswer){
        window.location = './defeat.html'
        return 
    }
    totalPass = totalPass - 1
    return runGame()
}

function randomIntForArray(max){
    return Math.floor(Math.random() * max)
}

function randomColor(gameData){
    let isPass = false
    let index
    do {
        index = randomIntForArray(gameData.length)
        if(!lastRandomList.includes(index)){
            isPass = true
            lastRandomList.push(index)
        }
    } while (!isPass)
    return gameData[ index ]
}

function runGame(){
    console.log(lastRandomList)
    if(totalPass < 1){
        window.location = './victory.html'
        return
    }

    let gameData = []
    gameData = colorArray.sort(() => 0.5 - Math.random())
    correctAnswer = randomColor(gameData)
    document.getElementById('color').style.background = correctAnswer

    let shuffleAnswer = colorArray.sort(() => 0.5 - Math.random())
    document.getElementById('answerColor').innerHTML = `
        <button style="background-color: ${shuffleAnswer[0]};" onclick="checkAnswer('${shuffleAnswer[0]}')"></button>
        <button style="background-color: ${shuffleAnswer[1]};" onclick="checkAnswer('${shuffleAnswer[1]}')"></button>
        <button style="background-color: ${shuffleAnswer[2]};" onclick="checkAnswer('${shuffleAnswer[2]}')"></button>
    `
}