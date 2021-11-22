// -- OSSARIO -- //

ossario = document.getElementById("ossario").children;

for (var i = 0; i < ossario.length; i++) {
    ossario[i].addEventListener("mouseover", ossarioChainIn);
    ossario[i].addEventListener("mouseout", ossarioChainOut);
    ossario[i].position = i;
}

var defaultSize = 60;
var chainExtension = 2;
var chainDifference = 20 / (chainExtension + 1);

function ossarioChainIn() {
    if (window.innerWidth > 1000)
        for (var i = Math.max(this.position - chainExtension, 0); i < ossario.length && i < this.position + chainExtension; i++) {
            ossario[i].style.height = (chainExtension + 1 - Math.abs(this.position - i)) * chainDifference + defaultSize + "%";
        }
}

function ossarioChainOut() {
    if (window.innerWidth > 1000)
        for (var i = Math.max(this.position - chainExtension, 0); i < ossario.length && i < this.position + chainExtension; i++) {
            ossario[i].style.height = defaultSize + "%";
        }
}