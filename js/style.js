let userScore = 0;
let compScore = 0;

let uCount = document.getElementById('uCount');
let cCount = document.getElementById('cCount');
let images = document.querySelectorAll('.images');
let resultText = document.getElementById('message')


const drawGame = ()=>{
    resultText.textContent = 'the Game is draw'
    resultText.style.backgroundColor = 'darkgrey';
};
images.forEach((image)=>{
    image.addEventListener('click',function(){
        const userChoice = image.getAttribute('id');
        playGame(userChoice);
        compChoice()
    })
})

let compChoice = ()=>{
    const options = ['rock','paper','scissors'];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        uCount.innerText = userScore;
        resultText.innerHTML = "You Won!";
        resultText.style.backgroundColor = 'green';
    }else{
        compScore++;
        cCount.innerText = compScore;
        resultText.textContent = "Computer Won!";
        resultText.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice)=>{
    console.log(userChoice);
    const computerChoice= compChoice();
    console.log(computerChoice)
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = computerChoice === 'paper'? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === 'scissors'? false : true;
        }else{
            userWin = computerChoice === 'rock'? false : true;
        }
        showWinner(userWin);
    }
}