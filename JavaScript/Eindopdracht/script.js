let btn = document.getElementById("menuButton");
let test = "test";
const menu = document.querySelector("#menu");


btn.addEventListener("click", show);



menu.style.visibility = "collapse";
menu.style.height = "0px";
menu.style.position = "absolute";

function show() {

    if (menu.style.visibility == "collapse") {
        menu.style.visibility = "visible";
        menu.style.position = "relative";

    } else {
        menu.style.visibility = "collapse";
        menu.style.height = "0px";
        menu.style.position = "absolute";
    }

}


let btnW = document.getElementById("butWhite");
let btnR = document.getElementById("butRed");
let btnO = document.getElementById("butOrange");
let btnP = document.getElementById("butPurple");
let btnG = document.getElementById("butGreen");
let bg = document.body;

btnW.addEventListener("click", colorW);
btnR.addEventListener("click", colorR);
btnO.addEventListener("click", colorO);
btnP.addEventListener("click", colorP);
btnG.addEventListener("click", colorG);

function colorW() {
    bg.style.background = "white";
    menu.style.visibility = "collapse";
    menu.style.height = "0px";
    menu.style.position = "absolute";
}

function colorR() {
    bg.style.background = "red";
    menu.style.visibility = "collapse";
    menu.style.height = "0px";
    menu.style.position = "absolute";
}

function colorO() {
    bg.style.background = "orange";
    menu.style.visibility = "collapse";
    menu.style.height = "0px";
    menu.style.position = "absolute";
}

function colorP() {
    bg.style.background = "purple";
    menu.style.visibility = "collapse";
    menu.style.height = "0px";
    menu.style.position = "absolute";
}

function colorG() {
    bg.style.background = "green";
    menu.style.visibility = "collapse";
    menu.style.height = "0px";
    menu.style.position = "absolute";
}


