let userScore = 0;
let botScore = 0;

const images = document.querySelectorAll(".img");
const msg = document.querySelector("#msg");

const userScoreV = document.querySelector("#user-score");
const botScoreV = document.querySelector("#bot-score");

const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was a Draw!");
    msg.innerText = "It was a Draw!";
    msg.style.backgroundColor = "midnightblue";
}

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin){
        userScore++;
        userScoreV.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        botScore++;
        botScoreV.innerText = botScore;
        console.log("Bot Win!");
        msg.innerText = "Bot Win!";
        msg.style.backgroundColor = "red";
        msg.innerText = `Bot Win! Its ${botChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const botChoice = genBotChoice();
    console.log("bot choice = ", botChoice);

    if(userChoice === botChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = botChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            userWin = botChoice === "scissors" ? false : true;
        } 
        else {
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
}

images.forEach((img) => {
    console.log(img);
    img.addEventListener("click", () => {
        const userChoice = img.getAttribute("id");
        playGame(userChoice);
    })
})