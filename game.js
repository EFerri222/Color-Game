// Global variables
var squares = document.querySelectorAll(".square");
var correctSquare = squares[Math.floor(Math.random() * 6)];
var rgbDisplay = document.querySelector("#rgb-display");
var messageDisplay = document.querySelector("#message");
var gameOver = false;

// Create a random RGB value string
function randomColor() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var red = getRandomIntInclusive(0,255);
    var green = getRandomIntInclusive(0,255);
    var blue = getRandomIntInclusive(0,255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Give each square a random background color
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
}

// Display rgb value of the correct square in HTML
rgbDisplay.textContent = correctSquare.style.backgroundColor.toUpperCase();

for(var i = 0; i < squares.length ; i++){
    squares[i].addEventListener("click", function() {
        if(!gameOver) {
            // If incorrect square is clicked, it becomes the same color as the body
            if(this != correctSquare) {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again!";
            // Otherwise make all the squares the correct color
            } else {
                for(var i = 0; i < squares.length ; i++){
                    squares[i].style.backgroundColor = correctSquare.style.backgroundColor;
                }
                messageDisplay.textContent = "Correct!";
                gameOver = true;
            }
        }
    })
}