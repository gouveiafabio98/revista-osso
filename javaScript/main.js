// -- Main Functions -- //

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onresize = function() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}