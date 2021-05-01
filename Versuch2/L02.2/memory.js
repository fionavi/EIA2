"use strict";
var L02;
(function (L02) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("click", showCard);
    function handleLoad(_event) {
        document.querySelector("#b5").addEventListener("click", createCards5);
        document.querySelector("#b15").addEventListener("click", createCards15);
        document.querySelector("#b25").addEventListener("click", createCards25);
    }
    function createCards5(_event) {
        for (let index = 0; index < 11; index++) {
            let card = document.createElement("div");
            let cardField = document.getElementById("cardDiv");
            card.style.width = "50px";
            card.style.height = "50px";
            card.style.backgroundColor = "grey";
            card.style.position = "left";
            card.style.marginTop = "10px";
            cardField.appendChild(card);
        }
    }
    function createCards15(_event) {
        for (let index = 0; index < 31; index++) {
            let card = document.createElement("div");
            let cardField = document.getElementById("cardDiv");
            card.style.width = "50px";
            card.style.height = "50px";
            card.style.backgroundColor = "grey";
            card.style.position = "left";
            cardField.appendChild(card);
        }
    }
    function createCards25(_event) {
        for (let index = 0; index < 51; index++) {
            let card = document.createElement("div");
            let cardField = document.getElementById("cardDiv");
            card.style.width = "50px";
            card.style.height = "50px";
            card.style.backgroundColor = "grey";
            card.style.position = "left";
            cardField.appendChild(card);
        }
    }
    function showCard(_event) {
        let card = new HTMLDivElement;
        let clickedObject = _event.target;
        if (clickedObject == card) {
            clickedObject.style.backgroundColor = "blue";
            clickedObject.innerHTML = cardValue;
        }
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=memory.js.map