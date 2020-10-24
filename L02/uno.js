"use strict";
window.addEventListener("load", function () {
    document.querySelector("#ziehstapel")?.addEventListener("click", createCard);
    document.querySelector("#ziehstapel")?.addEventListener("click", draw);
    document.querySelector("#ablagestapel")?.addEventListener("click", createFirstCard);
    document.querySelector(div.getAttribute("handkarte")?.addEventListener("click", playCard));
});
let color = ["blue", "red", "yellow", "green"];
let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/* let kartenfarbe: string[] = color.sort(function () {                //kartenfarbe wählt zufällige Farbe aus color: string[] -> Mit Befehl .sort(function () { return .5 - Math.random();})  (https://stackoverflow.com/a/18650169)
        return .5 - Math.random();
    });

let kartennummer: number[] = digit.sort(function () {                //kartenfarbe wählt zufällige Farbe aus color: string[] -> Mit Befehl .sort(function () { return .5 - Math.random();})  (https://stackoverflow.com/a/18650169)
        return .5 - Math.random();
});

interface Karte {
    farbe: string;
    nummer: number;
}

let neuekarte: Karte = {
    farbe: kartenfarbe[0],
    nummer: kartennummer[0]
}; */
function createCard() {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("color", color[Math.floor(Math.random() * 4)]); //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    div.setAttribute("numero", "" + digit[Math.floor(Math.random() * 10)]);
    div.setAttribute("name", "handkarte");
    div.innerText = div.getAttribute("numero");
    div.style.backgroundColor = div.getAttribute("color");
    div.style.fontSize = "200%";
    div.style.width = "150px";
    div.style.height = "225px";
    div.style.marginLeft = "30px";
    div.style.marginTop = "2%";
    div.style.position = "relative";
    div.style.float = "right";
}
function createFirstCard() {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("color", color[Math.floor(Math.random() * 4)]); //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    div.setAttribute("numero", "" + digit[Math.floor(Math.random() * 10)]);
    div.setAttribute("name", "ablage");
    div.innerText = div.getAttribute("numero");
    div.style.backgroundColor = div.getAttribute("color");
    div.style.fontSize = "200%";
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.marginLeft = "30.1%";
    div.style.marginTop = "-19.90%";
    div.style.position = "static";
}
/*
let turnPc: boolean = false;
let turnPlayer:boolean = true; */
function draw() {
    createCard; // Karte ziehen
    /* let button: HTMLButtonElement = document.createElement("button");             //PASS BUTTON erstellen
    document.body.appendChild(button);
    button.style.backgroundColor = color[Math.floor(Math.random() * 4)];
    button.style.fontSize = "200%";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.backgroundColor = "purple";
    button.style.position = "fixed";
    button.style.float = "right"; */
}
function playCard() {
    if (div.getAttribute("handkarte.farbe") == div.getAttribute("ablage.farbe")) {
        console.log("Vergleich funktioniert, Farbe gleich");
    }
    else {
        console.log("Vergleich funktioniert, Farbe");
    }
}
//# sourceMappingURL=uno.js.map