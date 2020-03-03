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

// Select all squares by class name
var squares = document.querySelectorAll(".square");

// Give each square a random background color
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
}

// Choose random number between 0 and 5
var answerIndex = Math.floor(Math.random() * 6);

// Choose correct square
var correctSquare = squares[answerIndex];

// Display rgb value of the correct square in HTML
var rgbDisplay = document.querySelector("#rgb-display");
rgbDisplay.textContent = squares[answerIndex].style.backgroundColor.toUpperCase();

for(var i = 0; i < squares.length ; i++){
    squares[i].addEventListener("click", function() {
        // If incorrect square is clicked, it becomes the same color as the body
        if(this != correctSquare) {
            this.style.backgroundColor = "#232323"
        // Otherwise make all the squares the correct color
        } else {
            for(var i = 0; i < squares.length ; i++){
                squares[i].style.backgroundColor = correctSquare.style.backgroundColor;
            }
        }
    })
}