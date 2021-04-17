"use strict";
var L01;
(function (L01) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("handleLoad start");
        window.addEventListener("mousemovement", setInfoBox);
        window.addEventListener("click", logInfo);
        window.addEventListener("keyup", logInfo);
        //   document.querySelector("#infos").addEventListener("click", handleInfos);
    }
    function setInfoBox(_event) {
        console.log("setInfoBox start");
        let span = document.createElement("span");
        span.id = "span";
        //span.style.position = mouseposition + offset
    }
    function logInfo(_event) {
        console.log("logInfo start");
    }
})(L01 || (L01 = {}));
//# sourceMappingURL=eventHandler.js.map