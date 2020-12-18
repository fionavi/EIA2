"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    //window.addEventListener("load", handleload);
    let skiers = [];
    function handleload(_event) {
        // let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        // if (!canvas) {
        //     return;
        // }
        // console.log(canvas);
        // crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        // console.log(crc2);
        // console.log("Skier Path: ", skierPaths);
        // let skier: Skier = new Skier(1);
        // console.log(skier);
        // skier.draw();
        // skier.moveBy(0.1);
        // skier.draw();
        // skier.moveBy(0.1);
        // skier.draw();
        // skier.moveBy(0.1);
        // skier.draw();
        // skier.moveBy(0.1);
        // skier.draw();
        // skier.moveBy(0.1);
    }
    window.addEventListener("load", handleload2);
    let golden = 0.62;
    let imgData;
    function handleload2(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        L09_Skipiste.crc2 = canvas.getContext("2d");
        console.log(L09_Skipiste.crc2);
        drawBackground();
        drawSun({ x: 50, y: 25 });
        drawCloud({ x: 190, y: 75 }, { x: 50, y: 25 });
        drawCloud({ x: 70, y: 170 }, { x: 50, y: 25 });
        drawPiste();
        drawLift();
        drawTrees();
        drawSnow({ x: 300, y: 600 }, { x: 600, y: 600 });
        imgData = L09_Skipiste.crc2.getImageData(0, 0, 300, 600);
        // drawSkier({ x: 100, y: 200 });
        // drawSkier({ x: 50, y: 20 });
        // drawSkier({ x: -100, y: 200 });
        // drawSkier({ x: 100, y: -90 });
        createSkier(5);
        debugger;
        window.setInterval(update, 20);
        //update(imgData);
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = L09_Skipiste.crc2.createLinearGradient(0, 0, 0, L09_Skipiste.crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "white");
        L09_Skipiste.crc2.fillStyle = gradient;
        L09_Skipiste.crc2.fillRect(0, 0, L09_Skipiste.crc2.canvas.width, L09_Skipiste.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun is drawing", _position);
        let r1 = 30;
        let r2 = 80;
        let gradient = L09_Skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_Skipiste.crc2.save();
        L09_Skipiste.crc2.translate(_position.x, _position.y);
        L09_Skipiste.crc2.fillStyle = gradient;
        L09_Skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud is drawing", _position, _size);
        let nParticles = 20;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = L09_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");
        L09_Skipiste.crc2.save();
        L09_Skipiste.crc2.translate(_position.x, _position.y);
        L09_Skipiste.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Skipiste.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Skipiste.crc2.translate(x, y);
            L09_Skipiste.crc2.fill(particle);
            L09_Skipiste.crc2.restore();
        }
        L09_Skipiste.crc2.restore();
    }
    function drawPiste() {
        L09_Skipiste.crc2.fillStyle = "aliceblue";
        L09_Skipiste.crc2.strokeStyle = "aliceblue";
        L09_Skipiste.crc2.save();
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(0, 400);
        L09_Skipiste.crc2.lineTo(300, 200);
        L09_Skipiste.crc2.lineTo(300, 600);
        L09_Skipiste.crc2.lineTo(0, 600);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.restore();
    }
    function drawLift() {
        L09_Skipiste.crc2.strokeStyle = "black";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(150, 500);
        L09_Skipiste.crc2.lineTo(350, 300);
        L09_Skipiste.crc2.lineTo(180, 500);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(210, 465);
        L09_Skipiste.crc2.lineTo(210, 485);
        L09_Skipiste.crc2.lineTo(230, 470);
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(250, 400);
        L09_Skipiste.crc2.lineTo(250, 420);
        L09_Skipiste.crc2.lineTo(230, 425);
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(290, 370);
        L09_Skipiste.crc2.lineTo(290, 395);
        L09_Skipiste.crc2.lineTo(315, 380);
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "DimGrey";
        L09_Skipiste.crc2.strokeStyle = "DimGrey";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(150, 525);
        L09_Skipiste.crc2.lineTo(150, 475);
        L09_Skipiste.crc2.lineTo(200, 475);
        L09_Skipiste.crc2.lineTo(200, 525);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "maroon";
        L09_Skipiste.crc2.strokeStyle = "maroon";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(150, 475);
        L09_Skipiste.crc2.lineTo(200, 475);
        L09_Skipiste.crc2.lineTo(175, 450);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
    }
    function drawTrees() {
        console.log("Trees are drawing");
        L09_Skipiste.crc2.fillStyle = "darkgreen";
        L09_Skipiste.crc2.strokeStyle = "green";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(30, 350);
        L09_Skipiste.crc2.lineTo(20, 370);
        L09_Skipiste.crc2.lineTo(25, 370);
        L09_Skipiste.crc2.lineTo(15, 390);
        L09_Skipiste.crc2.lineTo(20, 390);
        L09_Skipiste.crc2.lineTo(10, 410);
        L09_Skipiste.crc2.lineTo(50, 410);
        L09_Skipiste.crc2.lineTo(40, 390);
        L09_Skipiste.crc2.lineTo(45, 390);
        L09_Skipiste.crc2.lineTo(35, 370);
        L09_Skipiste.crc2.lineTo(40, 370);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "darkgreen";
        L09_Skipiste.crc2.strokeStyle = "green";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(50, 380);
        L09_Skipiste.crc2.lineTo(40, 400);
        L09_Skipiste.crc2.lineTo(45, 400);
        L09_Skipiste.crc2.lineTo(35, 420);
        L09_Skipiste.crc2.lineTo(40, 420);
        L09_Skipiste.crc2.lineTo(30, 440);
        L09_Skipiste.crc2.lineTo(70, 440);
        L09_Skipiste.crc2.lineTo(60, 420);
        L09_Skipiste.crc2.lineTo(65, 420);
        L09_Skipiste.crc2.lineTo(55, 400);
        L09_Skipiste.crc2.lineTo(60, 400);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "darkgreen";
        L09_Skipiste.crc2.strokeStyle = "green";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(70, 390);
        L09_Skipiste.crc2.lineTo(60, 410);
        L09_Skipiste.crc2.lineTo(65, 410);
        L09_Skipiste.crc2.lineTo(55, 430);
        L09_Skipiste.crc2.lineTo(60, 430);
        L09_Skipiste.crc2.lineTo(50, 450);
        L09_Skipiste.crc2.lineTo(90, 450);
        L09_Skipiste.crc2.lineTo(80, 430);
        L09_Skipiste.crc2.lineTo(85, 430);
        L09_Skipiste.crc2.lineTo(75, 410);
        L09_Skipiste.crc2.lineTo(80, 410);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "darkgreen";
        L09_Skipiste.crc2.strokeStyle = "green";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(10, 380);
        L09_Skipiste.crc2.lineTo(0, 400);
        L09_Skipiste.crc2.lineTo(5, 400);
        L09_Skipiste.crc2.lineTo(-5, 420);
        L09_Skipiste.crc2.lineTo(0, 420);
        L09_Skipiste.crc2.lineTo(-10, 440);
        L09_Skipiste.crc2.lineTo(30, 440);
        L09_Skipiste.crc2.lineTo(20, 420);
        L09_Skipiste.crc2.lineTo(25, 420);
        L09_Skipiste.crc2.lineTo(15, 400);
        L09_Skipiste.crc2.lineTo(20, 400);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
        L09_Skipiste.crc2.fillStyle = "darkgreen";
        L09_Skipiste.crc2.strokeStyle = "green";
        L09_Skipiste.crc2.beginPath();
        L09_Skipiste.crc2.moveTo(30, 399);
        L09_Skipiste.crc2.lineTo(20, 419);
        L09_Skipiste.crc2.lineTo(25, 419);
        L09_Skipiste.crc2.lineTo(15, 439);
        L09_Skipiste.crc2.lineTo(20, 439);
        L09_Skipiste.crc2.lineTo(10, 459);
        L09_Skipiste.crc2.lineTo(50, 459);
        L09_Skipiste.crc2.lineTo(40, 439);
        L09_Skipiste.crc2.lineTo(45, 439);
        L09_Skipiste.crc2.lineTo(35, 419);
        L09_Skipiste.crc2.lineTo(40, 419);
        L09_Skipiste.crc2.closePath();
        L09_Skipiste.crc2.fill();
        L09_Skipiste.crc2.stroke();
    }
    // function drawSkier(_position: Vector): void {
    //     let skier: Skier = new Skier(1);
    //     console.log(skier);
    //     skier.draw();
    //     skier.moveBy(0.1);
    //     skier.draw();
    //     skier.moveBy(0.1);
    //     skier.draw();
    //     skier.moveBy(0.1);
    //     skier.draw();
    //     skier.moveBy(0.1);
    //     skier.draw();
    //     skier.moveBy(0.1);
    // }
    function createSkier(_nSkier) {
        console.log("Create Skiers");
        for (let i = 0; i < _nSkier; i++) {
            let x = Math.random() * (300 - 150) + 150;
            let skier = new L09_Skipiste.Skier(2.0, x, 400);
            console.log("SKIER: " + skier);
            skier.draw();
            // skier.move();
            skiers.push(skier);
            // let imgData: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
            // crc2.putImageData(imgData, crc2.canvas.width, crc2.canvas.height);
        }
    }
    function drawSnow(_position, _size) {
        console.log("Snowflake is drawing", _position, _size);
        let nParticles = 500;
        let radiusParticle = 2;
        let particle = new Path2D();
        let gradient = L09_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");
        L09_Skipiste.crc2.save();
        L09_Skipiste.crc2.translate(_position.x, _position.y);
        L09_Skipiste.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Skipiste.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Skipiste.crc2.translate(x, y);
            L09_Skipiste.crc2.fill(particle);
            L09_Skipiste.crc2.restore();
        }
        L09_Skipiste.crc2.restore();
    }
    function update() {
        console.log("Update");
        L09_Skipiste.crc2.putImageData(imgData, 0, 0);
        for (let skier of skiers) {
            skier.move(1 / 50);
            skier.draw();
        }
    }
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=main.js.map