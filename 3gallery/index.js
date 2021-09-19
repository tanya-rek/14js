function showWashington() {
    document.getElementById("placeholder").src = "img/washington.jpg";

    document.getElementById("button-right").onclick = showLa;
    document.getElementById("button-left").onclick = showMiami;
}

function showMiami() {
    document.getElementById("placeholder").src = "img/miami.jpg";

    document.getElementById("button-right").onclick = showWashington;
    document.getElementById("button-left").onclick = showNyc;
}


function showLa() {
    document.getElementById("placeholder").src = "img/la.jpg";
    
    document.getElementById("button-right").onclick = showNyc;
    document.getElementById("button-left").onclick = showWashington;
}

function showNyc() {
    document.getElementById("placeholder").src = "img/nyc.jpg";

    document.getElementById("button-right").onclick = showMiami;
    document.getElementById("button-left").onclick = showLa;

}