// Global variables
var squares = document.querySelectorAll(".square");
var correctSquare = squares[Math.floor(Math.random() * squares.length)];
var rgbDisplay = document.querySelector("#rgb-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset-btn");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");
var gameOver = false;

// Create a random RGB value string
function randomColor() {
    // Generate random integer between 0 and 255
    function generateNumber() {
        return Math.floor(Math.random() * 256);
    }
    return "rgb(" + generateNumber() + ", " + generateNumber() + ", " + generateNumber() + ")";
}

// Give each square a random background color
function newColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
    }
}

newColors();

// Display rgb value of the correct square in HTML
rgbDisplay.textContent = correctSquare.style.backgroundColor.toUpperCase()

function addClickEvents() {
    // For each square...
    for(var i = 0; i < squares.length ; i++){
        squares[i].addEventListener("click", function() {
            if(!gameOver) {
                // ...if incorrect square is clicked, it becomes the same color as the body
                if(this !== correctSquare) {
                    this.style.backgroundColor = "#232323"
                    messageDisplay.textContent = "Try Again!";
                // Otherwise make all the squares and h1 background the correct color
                } else {
                    for(var i = 0; i < squares.length ; i++){
                        squares[i].style.backgroundColor = correctSquare.style.backgroundColor;
                    }
                    messageDisplay.textContent = "Correct!";
                    h1.style.backgroundColor = this.style.backgroundColor;
                    resetBtn.textContent = "Play Again?";
                    // Game is over
                    gameOver = true;
                }
            }
        });
    }
}

addClickEvents();

// Pick new correct square
function newCorrectSquare() {
    correctSquare = squares[Math.floor(Math.random() * squares.length)];
    // Display rgb value of the correct square in HTML
    rgbDisplay.textContent = correctSquare.style.backgroundColor.toUpperCase()
}

// Reset colors and pick a new correct square
function reset() {
    gameOver = false;
    newColors();
    newCorrectSquare();
    h1.style.backgroundColor = "#232323";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function() {
    reset();
});

easyBtn.addEventListener("click", function(){
    document.querySelector("#container").innerHTML = "<div class=\"square\"></div><div class=\"square\"></div><div class=\"square\"></div>";
    squares = document.querySelectorAll(".square");
    reset();
    addClickEvents();
});

hardBtn.addEventListener("click", function(){
    document.querySelector("#container").innerHTML = "<div class=\"square\"></div><div class=\"square\"></div><div class=\"square\"></div><div class=\"square\"></div><div class=\"square\"></div><div class=\"square\"></div>";
    squares = document.querySelectorAll(".square");
    reset();
    addClickEvents();
});