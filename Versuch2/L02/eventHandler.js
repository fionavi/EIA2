"use strict";
var L01;
(function (L01) {
    window.addEventListener("load", handleLoad);
    let button1 = document.getElementById("b1");
    function handleLoad(_event) {
        window.addEventListener("mousemove", setInfoBox);
        window.addEventListener("click", logInfo);
        window.addEventListener("keyup", logInfo);
        document.querySelector("#b1").addEventListener("click", customEvent);
    }
    function setInfoBox(_event) {
        let span = document.getElementById("span");
        let mousex = _event.clientX; // Gets Mouse X
        let mousey = _event.clientY; // Gets Mouse Y
        let offset = 10;
        span.style.left = mousex + offset + "px";
        span.style.top = mousey + offset + "px";
        span.innerHTML = "position: " + mousex + ", " + mousey + "<br>" + _event.target;
    }
    function logInfo(_event) {
        console.log("type: " + _event.type);
        console.log("target: " + _event.target);
        console.log("current target: " + _event.currentTarget);
        console.log("object: " + _event);
    }
    function customEvent(_event) {
        console.log("button was pressed");
        let data = "This is my data.";
        let event = new CustomEvent("click", { bubbles: true, detail: { key: data } });
        button1.dispatchEvent(event);
        console.log(event + " event wurde erzeugt");
    }
})(L01 || (L01 = {}));
//# sourceMappingURL=eventHandler.js.map