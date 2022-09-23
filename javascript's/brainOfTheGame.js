
document.addEventListener("DOMContentLoaded", () => {

    let cubes = document.querySelectorAll(".cube");

    cubes.forEach((c) => {
        c.addEventListener("click", handleClick);
    })

})

function handleClick(h) {
    let cube = h.target;
    let position = cube.id;

    if (handleMove(position)) {

        let displayWiner = document.querySelector("#container");
        time = (time == 0) ? 1 : 0;

        if (time == 0) {

            setTimeout(() => {

                displayWiner.innerHTML = '<div id="containerWins"><ion-icon class="iconWins" name="logo-tux"></ion-icon><h3>Linux Wins</h3><div class="tryAgain"><p>Play Again</p></div></div>';
                var playAgain = document.querySelector(".tryAgain");
                playAgain.addEventListener("click", resetButton);

            }, 250);

        } else if (time == 1) {

            setTimeout(() => {

                displayWiner.innerHTML = '<div id="containerWins"><ion-icon class="iconWins" name="logo-windows"></ion-icon><h3>Windons Wins</h3><div class="tryAgain"><p>Play Again</p></div></div>';
                var playAgain = document.querySelector(".tryAgain");
                playAgain.addEventListener("click", resetButton);

            }, 250);

        }
    }
    else if(tie()){

        let displayWiner = document.querySelector("#container");
        displayWiner.innerHTML = '<div id="containerWins"><ion-icon class="iconWins" name="reorder-two-outline"></ion-icon><h3>Tie !</h3><div class="tryAgain_tie"><p>Play Again</p></div></div>';
        var playAgain = document.querySelector(".tryAgain_tie");
        playAgain.addEventListener("click", resetButton);
    }

    turn();
    updateVisualCubes(position);
}

function updateVisualCubes(x) {

    let cube = document.getElementById(x.toString());
    let player = board[x];

    if (player == "o") {

        cube.innerHTML = '<div class="cube"><ion-icon class="p" name="logo-tux"></ion-icon></div>'

    } else if (player == "x") {

        cube.innerHTML = '<div class="cube"><ion-icon class="p" name="logo-windows"></ion-icon></div>'

    }
}

function resetButton() {
    updateResetCubes();
}

function updateResetCubes() {
    location.reload()
}

function turn() {
    let turnOne = document.querySelector(".scoreboardOne");
    let turnTwo = document.querySelector(".scoreboardTwo");

    if (time == 0) {

        turnOne.style.borderColor = "white"
        turnTwo.style.borderColor = "#513B41"

    } else if (time == 1) {

        turnOne.style.borderColor = "#513B41"
        turnTwo.style.borderColor = "white"

    }
}
