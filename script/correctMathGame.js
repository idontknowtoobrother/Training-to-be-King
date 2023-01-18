const settings = {
    numOfQuest: 2,
    operator: '+',
    cal: {
        '+': function(x, y) { return x + y },
        '-': function(x, y) { return x - y },
    }
}
let gameData
let correctAnswer



function randomIntForArray(max){
    return Math.floor(Math.random() * max)
}

function randomInt(max){
    return Math.floor(Math.random() * max) + 1
}


function checkAnswer(){
    let answer = document.getElementById('check_answer').value
    if(answer.length == 0) return;
    if(answer != correctAnswer) {
        return window.location = './defeat.html'
    }
    return runGame()
}

function initGameData(){
    gameData = []
    for(let i = 0; i < settings.numOfQuest; i++){
        let quest = {}
        quest.operator = settings.operator
        quest.num1 = randomInt(10)
        quest.num2 = randomInt(10)
        quest.hideNum = randomInt(2)
        quest.result = settings.cal[quest.operator](quest.num1, quest.num2)
        gameData.push(quest)
    }
    runGame()
}

function runGame(){
    if (gameData.length < 1) {
        window.location = './correct_color.html'
        return 
    }

    document.getElementById('check_answer').value = ''

    let quest = gameData.pop()
    let htmlSetup
    if (quest.hideNum === 1){
        htmlSetup = `_ ${quest.operator} ${quest.num2} = ${quest.result}`
    }else{
        htmlSetup = `${quest.num1} ${quest.operator} _ = ${quest.result}`
    }
    correctAnswer = quest['num' + quest.hideNum]
    document.getElementById('equation').innerHTML = htmlSetup
}