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