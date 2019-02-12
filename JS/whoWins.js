function setBoxValue() {
    switch (imageId) {
        case "1":
            if (turn == 0)
                boxValue1 = 1;
            else if (turn == 1)
                boxValue1 = 10;
            break;

        case "2":
            if (turn == 0)
                boxValue2 = 1;
            else if (turn == 1)
                boxValue2 = 10;
            break;

        case "3":
            if (turn == 0)
                boxValue3 = 1;
            else if (turn == 1)
                boxValue3 = 10;
            break;

        case "4":
            if (turn == 0)
                boxValue4 = 1;
            else if (turn == 1)
                boxValue4 = 10;
            break;

        case "5":
            if (turn == 0)
                boxValue5 = 1;
            else if (turn == 1)
                boxValue5 = 10;
            break;

        case "6":
            if (turn == 0)
                boxValue6 = 1;
            else if (turn == 1)
                boxValue6 = 10;
            break;

        case "7":
            if (turn == 0)
                boxValue7 = 1;
            else if (turn == 1)
                boxValue7 = 10;
            break;

        case "8":
            if (turn == 0)
                boxValue8 = 1;
            else if (turn == 1)
                boxValue8 = 10;
            break;

        case "9":
            if (turn == 0)
                boxValue9 = 1;
            else if (turn == 1)
                boxValue9 = 10;
            break;

        default: console.log(typeof imageId);
    }
}

function whoWins() {

    win1 = boxValue1 + boxValue2 + boxValue3;
    win2 = boxValue4 + boxValue5 + boxValue6;
    win3 = boxValue7 + boxValue8 + boxValue9;
    win4 = boxValue1 + boxValue4 + boxValue7;
    win5 = boxValue2 + boxValue5 + boxValue8;
    win6 = boxValue3 + boxValue6 + boxValue9;
    win7 = boxValue1 + boxValue5 + boxValue9;
    win8 = boxValue7 + boxValue5 + boxValue3;

    if (win1 == 3 || win2 == 3 || win3 == 3 || win4 == 3 || win5 == 3 || win6 == 3 || win7 == 3 || win8 == 3) {
        xWins = true;
        gameOver();
    }

    else if (win1 == 30 || win2 == 30 || win3 == 30 || win4 == 30 || win5 == 30 || win6 == 30 || win7 == 30 || win8 == 30) {
        oWins = true;
        gameOver();
    }

    else if (turnCounter == 7 || turnCounter == 8) {
        if ((win1 != 10 && win1 != 20) && (win2 != 10 && win2 != 20) && (win3 != 10 && win3 != 20) && (win4 != 10 && win4 != 20) && (win5 != 10 && win5 != 20) && (win6 != 10 && win6 != 20) && (win7 != 10 && win7 != 20) && (win8 != 10 && win8 != 20)) {
            draw = true;
        }
        gameOver();
    }

    else if (turnCounter == 8) {
        if ((win1 == 10 && turn == 1) || (win2 == 10 && turn == 1) || (win3 == 10 && turn == 1) || (win4 == 10 && turn == 1) || (win5 == 10 && turn == 1) || (win6 == 10 && turn == 1) || (win7 == 10 && turn == 1) || (win8 == 10 && turn == 1)) {
            draw = true;
        }

        else if ((win1 == 20 && turn == 0) || (win2 == 20 && turn == 0) || (win3 == 20 && turn == 0) || (win4 == 20 && turn == 0) || (win5 == 20 && turn == 0) || (win6 == 20 && turn == 0) || (win7 == 20 && turn == 0) || (win8 == 20 && turn == 0)) {
            draw = true;
        }
        gameOver();
    }

    else if (turnCounter == 9) {
        draw = true;
        gameOver();
    }
}

function gameOver() {
    var element = document.getElementById("display");
    if (element) {
        if (xWins) {
            element.innerHTML = "X wins";
            blockEmptyBoxes();
        }
        else if (oWins) {
            element.innerHTML = "O wins";
            blockEmptyBoxes();
        }
        else if (draw) {
            element.innerHTML = "Draw";
            blockEmptyBoxes();
        }
    }
}

function blockEmptyBoxes() {
    var boxesArr = document.querySelectorAll(".X-or-O-Square");
    for (var i = 0; i < boxesArr.length; i++) {
        var box = boxesArr[i];
        box.removeEventListener("click", clickBoxHandler);
    }
}