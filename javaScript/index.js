// -- MAIN -- //

var main = document.getElementsByClassName("osso");
var mainMap = Array();

// -- Run Function -- //
function run() {
    if (!this.classList.contains("hidden")) {
        this.classList.add("hidden");
        var indexMain = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
        var index = Array.prototype.indexOf.call(this.parentNode.children, this);
        var indexNew = mainMap[indexMain].indexOf(true);
        this.parentNode.children[indexNew].classList.remove("hidden");
        mainMap[indexMain][indexNew] = false;
        mainMap[indexMain][index] = true;
    }
}

for (var i = 0; i < main.length; i++) {
    var mainChildren = main[i].children;
    mainMap.push(Array());
    for (var j = 0; j < mainChildren.length; j++) {
        mainMap[i].push(mainChildren[j].classList.contains("hidden"));
        mainChildren[j].addEventListener("mouseover", run);
    }
}

// -- Color Transition -- //
var black = 50;
var white = 228;
var newColor = white;
var transitionPoint = window.innerWidth;

var menuLogo = document.getElementById("logo").children[0];

function indexNewColor() {
    if (window.innerWidth > 1000)
        var percent = Math.max(Math.min((window.scrollX - window.innerWidth / 4) / (window.innerWidth / 2), 1), 0);
    else
        var percent = Math.max(Math.min((window.scrollY - window.innerHeight / 4) / (window.innerHeight / 2), 1), 0);

    var invertColor = (white - black) * percent;
    newColor = white - invertColor;

    document.body.style.backgroundColor = "rgb(" + newColor + "," + newColor + "," + newColor + ")";
    hamburguer.firstElementChild.style.fill = "rgb(" + invertColor + "," + invertColor + "," + invertColor + ")";
    menuLogo.style.color = "rgb(" + invertColor + "," + invertColor + "," + invertColor + ")";
}

indexNewColor();

// -- Wheel Event -- //
content.addEventListener("wheel", function(event) {
    if (window.innerWidth > 1000) {
        window.scrollTo(window.scrollX + event.deltaY, 0);
        positionBone = 0;
        while (mapping.length > positionBone + 1 && window.scrollX >= mapping[positionBone + 1].scroll) {
            positionBone++;
        }

        var location = (window.scrollX - mapping[positionBone].scroll) / (mapping[positionBone + 1].scroll - mapping[positionBone].scroll);

        boneDirection.position.x = mapping[positionBone].position.x + (mapping[positionBone + 1].position.x - mapping[positionBone].position.x) * location;
        boneDirection.rotation.y = mapping[positionBone].rotation.y + (mapping[positionBone + 1].rotation.y - mapping[positionBone].rotation.y) * location;

        window.requestAnimationFrame(boneTransition);
    }
    indexNewColor();
});

window.onscroll = function() {
    indexNewColor();
};