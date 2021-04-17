namespace L01 {

    window.addEventListener("load", handleLoad);
    let button1: HTMLElement = document.getElementById("b1");

    function handleLoad(_event: Event): void {

        window.addEventListener("mousemove", setInfoBox);
        window.addEventListener("click", logInfo);
        window.addEventListener("keyup", logInfo);
        document.querySelector("#b1").addEventListener("click", customEvent);

    }


    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLSpanElement = document.getElementById("span");

        let mousex: number = _event.clientX; // Gets Mouse X
        let mousey: number = _event.clientY; // Gets Mouse Y
        let offset: number = 10;



        span.style.left = mousex + offset + "px";
        span.style.top = mousey + offset + "px";
        span.innerHTML = "position: " + mousex + ", " + mousey + "<br>" + _event.target;
    }


    function logInfo(_event: Event): void {

        console.log("type: " + _event.type);
        console.log("target: " + _event.target);
        console.log("current target: " + _event.currentTarget);
        console.log("object: " + _event);
    }

    function customEvent(_event: Event): void {
        console.log("button was pressed");
        let data: string = "This is my data.";
        let event: CustomEvent = new CustomEvent("click", { bubbles: true, detail: { key: data } });
        button1.dispatchEvent(event);
        console.log(event + " event wurde erzeugt");
    }
}

