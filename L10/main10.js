"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    let moveables = [];
    window.addEventListener("load", handleload2);
    let golden = 0.62;
    let imgData;
    function handleload2(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        L10_Skipiste.crc2 = canvas.getContext("2d");
        console.log(L10_Skipiste.crc2);
        drawBackground();
        drawSun({ x: 50, y: 25 });
        drawCloud({ x: 190, y: 75 }, { x: 50, y: 25 });
        drawCloud({ x: 70, y: 170 }, { x: 50, y: 25 });
        drawPiste();
        drawLift();
        drawTrees();
        drawSnow({ x: 300, y: 600 }, { x: 600, y: 600 });
        imgData = L10_Skipiste.crc2.getImageData(0, 0, 300, 600);
        createMoveable(5);
        window.setInterval(update, 20);
        //update(imgData);
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = L10_Skipiste.crc2.createLinearGradient(0, 0, 0, L10_Skipiste.crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "white");
        L10_Skipiste.crc2.fillStyle = gradient;
        L10_Skipiste.crc2.fillRect(0, 0, L10_Skipiste.crc2.canvas.width, L10_Skipiste.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun is drawing", _position);
        let r1 = 30;
        let r2 = 80;
        let gradient = L10_Skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_Skipiste.crc2.save();
        L10_Skipiste.crc2.translate(_position.x, _position.y);
        L10_Skipiste.crc2.fillStyle = gradient;
        L10_Skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud is drawing", _position, _size);
        let nParticles = 20;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = L10_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");
        L10_Skipiste.crc2.save();
        L10_Skipiste.crc2.translate(_position.x, _position.y);
        L10_Skipiste.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_Skipiste.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_Skipiste.crc2.translate(x, y);
            L10_Skipiste.crc2.fill(particle);
            L10_Skipiste.crc2.restore();
        }
        L10_Skipiste.crc2.restore();
    }
    function drawPiste() {
        L10_Skipiste.crc2.fillStyle = "aliceblue";
        L10_Skipiste.crc2.strokeStyle = "aliceblue";
        L10_Skipiste.crc2.save();
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(0, 400);
        L10_Skipiste.crc2.lineTo(300, 200);
        L10_Skipiste.crc2.lineTo(300, 600);
        L10_Skipiste.crc2.lineTo(0, 600);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.restore();
    }
    function drawLift() {
        L10_Skipiste.crc2.strokeStyle = "black";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(150, 500);
        L10_Skipiste.crc2.lineTo(350, 300);
        L10_Skipiste.crc2.lineTo(180, 500);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "DimGrey";
        L10_Skipiste.crc2.strokeStyle = "DimGrey";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(150, 525);
        L10_Skipiste.crc2.lineTo(150, 475);
        L10_Skipiste.crc2.lineTo(200, 475);
        L10_Skipiste.crc2.lineTo(200, 525);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "maroon";
        L10_Skipiste.crc2.strokeStyle = "maroon";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(150, 475);
        L10_Skipiste.crc2.lineTo(200, 475);
        L10_Skipiste.crc2.lineTo(175, 450);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
    }
    function drawTrees() {
        console.log("Trees are drawing");
        L10_Skipiste.crc2.fillStyle = "darkgreen";
        L10_Skipiste.crc2.strokeStyle = "green";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(30, 350);
        L10_Skipiste.crc2.lineTo(20, 370);
        L10_Skipiste.crc2.lineTo(25, 370);
        L10_Skipiste.crc2.lineTo(15, 390);
        L10_Skipiste.crc2.lineTo(20, 390);
        L10_Skipiste.crc2.lineTo(10, 410);
        L10_Skipiste.crc2.lineTo(50, 410);
        L10_Skipiste.crc2.lineTo(40, 390);
        L10_Skipiste.crc2.lineTo(45, 390);
        L10_Skipiste.crc2.lineTo(35, 370);
        L10_Skipiste.crc2.lineTo(40, 370);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "darkgreen";
        L10_Skipiste.crc2.strokeStyle = "green";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(50, 380);
        L10_Skipiste.crc2.lineTo(40, 400);
        L10_Skipiste.crc2.lineTo(45, 400);
        L10_Skipiste.crc2.lineTo(35, 420);
        L10_Skipiste.crc2.lineTo(40, 420);
        L10_Skipiste.crc2.lineTo(30, 440);
        L10_Skipiste.crc2.lineTo(70, 440);
        L10_Skipiste.crc2.lineTo(60, 420);
        L10_Skipiste.crc2.lineTo(65, 420);
        L10_Skipiste.crc2.lineTo(55, 400);
        L10_Skipiste.crc2.lineTo(60, 400);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "darkgreen";
        L10_Skipiste.crc2.strokeStyle = "green";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(70, 390);
        L10_Skipiste.crc2.lineTo(60, 410);
        L10_Skipiste.crc2.lineTo(65, 410);
        L10_Skipiste.crc2.lineTo(55, 430);
        L10_Skipiste.crc2.lineTo(60, 430);
        L10_Skipiste.crc2.lineTo(50, 450);
        L10_Skipiste.crc2.lineTo(90, 450);
        L10_Skipiste.crc2.lineTo(80, 430);
        L10_Skipiste.crc2.lineTo(85, 430);
        L10_Skipiste.crc2.lineTo(75, 410);
        L10_Skipiste.crc2.lineTo(80, 410);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "darkgreen";
        L10_Skipiste.crc2.strokeStyle = "green";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(10, 380);
        L10_Skipiste.crc2.lineTo(0, 400);
        L10_Skipiste.crc2.lineTo(5, 400);
        L10_Skipiste.crc2.lineTo(-5, 420);
        L10_Skipiste.crc2.lineTo(0, 420);
        L10_Skipiste.crc2.lineTo(-10, 440);
        L10_Skipiste.crc2.lineTo(30, 440);
        L10_Skipiste.crc2.lineTo(20, 420);
        L10_Skipiste.crc2.lineTo(25, 420);
        L10_Skipiste.crc2.lineTo(15, 400);
        L10_Skipiste.crc2.lineTo(20, 400);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
        L10_Skipiste.crc2.fillStyle = "darkgreen";
        L10_Skipiste.crc2.strokeStyle = "green";
        L10_Skipiste.crc2.beginPath();
        L10_Skipiste.crc2.moveTo(30, 399);
        L10_Skipiste.crc2.lineTo(20, 419);
        L10_Skipiste.crc2.lineTo(25, 419);
        L10_Skipiste.crc2.lineTo(15, 439);
        L10_Skipiste.crc2.lineTo(20, 439);
        L10_Skipiste.crc2.lineTo(10, 459);
        L10_Skipiste.crc2.lineTo(50, 459);
        L10_Skipiste.crc2.lineTo(40, 439);
        L10_Skipiste.crc2.lineTo(45, 439);
        L10_Skipiste.crc2.lineTo(35, 419);
        L10_Skipiste.crc2.lineTo(40, 419);
        L10_Skipiste.crc2.closePath();
        L10_Skipiste.crc2.fill();
        L10_Skipiste.crc2.stroke();
    }
    function createMoveable(_nMoveable) {
        console.log("Create Moveables");
        for (let i = 0; i < _nMoveable; i++) {
            let x = Math.random() * (300 - 150) + 150;
            let moveable1 = new L10_Skipiste.Skier(2.0, x, 400);
            let moveable2 = new L10_Skipiste.Snow(2.0, x, 100);
            let moveable3 = new L10_Skipiste.Lift(1, x, 3);
            console.log("MOVEABLE: " + moveable1);
            console.log("MOVEABLE: " + moveable2);
            console.log("MOVEABLE: " + moveable3);
            moveable1.draw();
            moveable3.draw();
            moveables.push(moveable1);
            moveables.push(moveable2);
            moveables.push(moveable3);
        }
    }
    function drawSnow(_position, _size) {
        console.log("Snowflake is drawing", _position, _size);
        let nParticles = 500;
        let radiusParticle = 2;
        let particle = new Path2D();
        let gradient = L10_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");
        L10_Skipiste.crc2.save();
        L10_Skipiste.crc2.translate(_position.x, _position.y);
        L10_Skipiste.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_Skipiste.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_Skipiste.crc2.translate(x, y);
            L10_Skipiste.crc2.fill(particle);
            L10_Skipiste.crc2.restore();
        }
        L10_Skipiste.crc2.restore();
    }
    function update() {
        console.log("Update");
        L10_Skipiste.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=main10.js.map