let board = ['', '', '', '', '', '', '', '', ''];
let time = 0;
let gameOver = false;
let player = ['o', 'x'];

function handleMove(position) {

    if (gameOver) {
        return
    }

    if (board[position] == '') {

        board[position] = player[time];
        gameOver = ifWin();

        time = (time == 0) ? 1 : 0;

    }

    return gameOver;
}

let conbination = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

function ifWin() {

    for (let i = 0; i < conbination.length; i++) {

        let token = conbination[i];
        pos0 = token[0];
        pos1 = token[1];
        pos2 = token[2];

        if (board[pos0] == board[pos1]
            && board[pos0] == board[pos2]
            && board[pos0] != '') {

            return true;
        }
    }

    return false;

}

function tie() {
    
    if (board[0] != ''
        && board[1] != ''
        && board[2] != ''
        && board[3] != ''
        && board[4] != ''
        && board[5] != ''
        && board[6] != ''
        && board[7] != ''
        && board[8] != '') {
        return true;
    }

    return false
}
