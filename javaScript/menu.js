// -- HAMBURUGER -- //

var header = document.getElementById("head");
var hamburguer = document.getElementById("hamburguer");

var burguerOpen = hamburguer.getElementsByClassName("open"),
    burguerClose = hamburguer.getElementsByClassName("close"); // Eventos da animação do hamburguer

hamburguer.addEventListener("click", hamburguerMenu);

function hamburguerMenu() {
    if (header.classList.contains("active")) {
        header.classList.remove("active");
        if(document.body.id != "scroll-horizontal")
            document.body.style.overflow = "auto";
        for (var i = 0; i < burguerClose.length; i++) {
            burguerClose[i].beginElement();
        }
    } else {
        header.classList.add("active");
        document.body.style.overflow = "hidden";
        for (var i = 0; i < burguerOpen.length; i++) {
            burguerOpen[i].beginElement();
        }
    }
}

function openOssario() {
    var page = window.location.pathname.split("/").pop();

    if(page=="index.html") {
        hamburguerMenu();
        window.scrollTo(document.getElementById("ossario").offsetLeft, document.getElementById("ossario").offsetTop);
        indexNewColor();
    } else {
        window.location.href = "index.html#ossario";
    }
}