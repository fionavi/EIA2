namespace L01 {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("handleLoad start");

        window.addEventListener("mousemovement", setInfoBox);
        window.addEventListener("click", logInfo);
        window.addEventListener("keyup", logInfo);
     //   document.querySelector("#infos").addEventListener("click", handleInfos);
    
    }


    function setInfoBox(_event: Event): void {
        console.log("setInfoBox start");
        let span: HTMLSpanElement = document.createElement("span");      
        span.id = "span";
        //span.style.position = mouseposition + offset
    }


    function logInfo(_event: Event): void {
        console.log("logInfo start");
    }

}