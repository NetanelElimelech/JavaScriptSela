function initPage() {
    //setTurnSelectorText();
    var boxesArr = document.querySelectorAll(".X-or-O-Square");
    for (var i = 0; i < boxesArr.length; i++) {
        var box = boxesArr[i];
        box.setAttribute("src", "images/BG.png");
        box.addEventListener("click", clickBoxHandler);
    }
}

function clickBoxHandler() {

    imageId = this.getAttribute("id").valueOf();
    setBoxValue();
    
    if (turn == 0) {
        this.setAttribute("src", "images/X.png");
        turn = 1;
        setTurnSelectorText();
    }
    else if (turn == 1) {
        this.setAttribute("src", "images/O.png");
        turn = 0;
        setTurnSelectorText();
    }
    
    
    turnCounter++;
    
    if (turnCounter >= 5) {
        whoWins();
    }
    
    this.removeEventListener("click", clickBoxHandler);
}

function setTurnSelectorText() {
    var element = document.getElementById("turnSelector");
    if (element) {
        if (turn == 0)
            element.innerHTML = "X's turn";
        else if (turn == 1)
            element.innerHTML = "O's turn";
    }
}

function clearWinnerDiv() {
    var element = document.getElementById("display");
    if (element)
        element.innerHTML = "";
}

function startNewGame() {
    turn = 0;
    xWins = false;
    oWins = false;
    draw = false;
    turnCounter = 0;
    setTurnSelectorText();
    clearWinnerDiv();
    initPage();
}