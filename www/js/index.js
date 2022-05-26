
window.onload = function() {
    start();
};

// switch every half second its background color to black and white
function start() {
    var circleLeft = document.getElementById('left');
    var circleRight = document.getElementById('right');
    var i = 0;
    var interval = setInterval(function() {
        if (i % 2 == 0) {
            circleLeft.style.backgroundColor = 'black';
            circleRight.style.backgroundColor = 'black';
        } else {
            circleLeft.style.backgroundColor = 'white';
            circleRight.style.backgroundColor = 'white';
        }
        i++;
    }
    , 100);
}
