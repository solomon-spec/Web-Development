let players = document.querySelectorAll('.player')
let incScore = document.querySelectorAll('.inc-score')
let gameOver = false;
const addToPlayerScore = (num) => {
    let player = players[num];
    console.log( player.textContent);
    if(gameOver === false) {player.textContent = parseInt(player.textContent) + 1;}
    
    if (parseInt(player.textContent) === 10){gameOver = true}
    if(parseInt(player.textContent) >= 10){
        player.classList.add("winner")
        players[1-num].classList.add("looser")
    }
}

let p1Button = document.querySelector('#player1-btn')
let p2Button = document.querySelector('#player2-btn')
let resetButton = document.querySelector('#reset-btn')

p1Button.addEventListener('click', function () {
    addToPlayerScore(0);
});

p2Button.addEventListener('click', function () {
    addToPlayerScore(1);
});

resetButton.addEventListener('click', function () {
    players.forEach(player => {
        player.textContent = "0";
        player.classList.remove("winner")
        player.classList.remove("looser")
        gameOver = false;
    })
});

let table = document.querySelector('#table')
table.add