"use strict";
var L09;
(function (L09) {
    let bees = [];
    let clouds = [];
    window.addEventListener("load", handleload);
    //let crc2: CanvasRenderingContext2D;
    let golden = 0.62;
    let imgData;
    console.log("start");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        L09.crc2 = canvas.getContext("2d");
        console.log(L09.crc2);
        drawBackground();
        drawSun({ x: 300, y: 10 });
        /*  drawCloud({ x: 100, y: 100 }, { x: 100, y: 50 });
         drawCloud({ x: 170, y: 200 }, { x: 100, y: 50 });*/
        drawCloud({ x: 100, y: 100 });
        drawMountains();
        drawLawn();
        drawBee(10);
        /*  drawBee({ x: 0, y: 110 });
         drawBee({ x: 20, y: 310 });
         drawBee({ x: -100, y: 400 });
         drawBee({ x: -130, y: 180 }); */
        drawDaisy({ x: -20, y: 420 });
        drawTulip({ x: 60, y: 300 });
        drawHortensia({ x: 70, y: 440 });
        drawDaisy({ x: -100, y: 470 });
        drawTulip({ x: 200, y: 400 });
        drawHortensia({ x: 320, y: 560 });
        drawDaisy({ x: 60, y: 470 });
        drawTrees();
        drawBeeStock();
        imgData = L09.crc2.getImageData(0, 0, 360, 640);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = L09.crc2.createLinearGradient(0, 0, 0, L09.crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "white");
        L09.crc2.fillStyle = gradient;
        L09.crc2.fillRect(0, 0, L09.crc2.canvas.width, L09.crc2.canvas.height);
        L09.crc2.closePath();
    }
    function drawBee(_nBee) {
        console.log("Create Bees");
        for (let i = 0; i < _nBee; i++) {
            let x = Math.random() * (300 - 150) + 150;
            let bee = new L09.Bee(2.0, x, 400);
            console.log("BEE: " + bee);
            bee.draw();
            bee.move(3);
            bees.push(bee);
            // let imgData: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
            // crc2.putImageData(imgData, crc2.canvas.width, crc2.canvas.height);
        }
    }
    function drawHortensia(_position) {
        console.log("Hortensia is drawing", _position);
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.strokeStyle = "green";
        L09.crc2.lineWidth = 5;
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 0);
        L09.crc2.lineTo(10, 15);
        L09.crc2.lineTo(-5, 20);
        L09.crc2.lineTo(0, 50);
        L09.crc2.stroke();
        let nParticles = 100;
        let radiusParticle = 4;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        L09.crc2.fillStyle = "blue";
        L09.crc2.strokeStyle = "white";
        L09.crc2.lineWidth = 1;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09.crc2.save();
            let x = (Math.random() - 0.5) * (2 * Math.PI) * 5;
            let y = -(Math.random() * (2 * Math.PI) * 5);
            L09.crc2.translate(x, y);
            L09.crc2.fill(particle);
            L09.crc2.stroke(particle);
            L09.crc2.restore();
        }
        L09.crc2.restore();
    }
    function drawDaisy(_position) {
        console.log("Daisy is drawing", _position);
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.strokeStyle = "green";
        L09.crc2.lineWidth = 5;
        L09.crc2.beginPath();
        L09.crc2.moveTo(200, 100);
        L09.crc2.lineTo(200, 180);
        L09.crc2.closePath();
        L09.crc2.stroke();
        L09.crc2.fillStyle = "yellow";
        L09.crc2.beginPath();
        L09.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.fillStyle = "white";
        L09.crc2.beginPath();
        L09.crc2.ellipse(200, 130, 10, 20, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(200, 70, 10, 20, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(170, 100, 20, 10, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(230, 100, 20, 10, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(175, 80, 20, 10, 10, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(222, 79, 20, 10, 40, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(177, 123, 20, 10, 40, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.ellipse(225, 122, 20, 10, 10, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.restore();
    }
    function drawTulip(_position) {
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.strokeStyle = "green";
        L09.crc2.fillStyle = "green";
        L09.crc2.lineWidth = 5;
        L09.crc2.beginPath();
        L09.crc2.moveTo(75, 100);
        L09.crc2.lineTo(75, 200);
        L09.crc2.closePath();
        L09.crc2.stroke();
        L09.crc2.beginPath();
        L09.crc2.ellipse(90, 140, 10, 25, 10, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.fillStyle = "red";
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 50);
        L09.crc2.lineTo(50, 100);
        L09.crc2.lineTo(100, 100);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.beginPath();
        L09.crc2.moveTo(75, 50);
        L09.crc2.lineTo(50, 100);
        L09.crc2.lineTo(100, 100);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.moveTo(120, 50);
        L09.crc2.lineTo(50, 100);
        L09.crc2.lineTo(100, 100);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun is drawing", _position);
        let r1 = 40;
        let r2 = 130;
        let gradient = L09.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.fillStyle = gradient;
        L09.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09.crc2.fill();
        L09.crc2.restore();
    }
    function drawCloud(_position) {
        console.log("Create Clouds", _position);
        let cloud = new L09.Cloud(_position.x, _position.y);
        console.log("CLOUD: " + cloud);
        cloud.draw();
        cloud.move(3);
        clouds.push(cloud);
        // let imgData: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        // crc2.putImageData(imgData, crc2.canvas.width, crc2.canvas.height);
        L09.crc2.restore();
    }
    function drawMountains() {
        let gradient = L09.crc2.createLinearGradient(0, 0, 0, L09.crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.4, "grey");
        gradient.addColorStop(1, "darkgrey");
        L09.crc2.fillStyle = gradient;
        L09.crc2.strokeStyle = "black";
        L09.crc2.save();
        L09.crc2.beginPath();
        L09.crc2.moveTo(100, 300);
        L09.crc2.lineTo(200, 150);
        L09.crc2.lineTo(300, 300);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.restore();
        L09.crc2.save();
        L09.crc2.beginPath();
        L09.crc2.moveTo(200, 300);
        L09.crc2.lineTo(300, 150);
        L09.crc2.lineTo(400, 300);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.restore();
        L09.crc2.save();
        L09.crc2.beginPath();
        L09.crc2.moveTo(-50, 300);
        L09.crc2.lineTo(100, 100);
        L09.crc2.lineTo(250, 300);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.restore();
    }
    function drawLawn() {
        L09.crc2.strokeStyle = "black";
        L09.crc2.fillStyle = "lightgreen";
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 300);
        L09.crc2.lineTo(360, 300);
        L09.crc2.lineTo(360, 640);
        L09.crc2.lineTo(0, 640);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
    }
    function drawTrees() {
        console.log("Trees are drawing");
        L09.crc2.translate(-0, 0);
        L09.crc2.lineWidth = 2;
        L09.crc2.fillStyle = "darkgreen";
        L09.crc2.strokeStyle = "green";
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 350);
        L09.crc2.lineTo(20, 370);
        L09.crc2.lineTo(25, 370);
        L09.crc2.lineTo(15, 390);
        L09.crc2.lineTo(20, 390);
        L09.crc2.lineTo(10, 410);
        L09.crc2.lineTo(50, 410);
        L09.crc2.lineTo(40, 390);
        L09.crc2.lineTo(45, 390);
        L09.crc2.lineTo(35, 370);
        L09.crc2.lineTo(40, 370);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.translate(-10, -70);
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 350);
        L09.crc2.lineTo(20, 370);
        L09.crc2.lineTo(25, 370);
        L09.crc2.lineTo(15, 390);
        L09.crc2.lineTo(20, 390);
        L09.crc2.lineTo(10, 410);
        L09.crc2.lineTo(50, 410);
        L09.crc2.lineTo(40, 390);
        L09.crc2.lineTo(45, 390);
        L09.crc2.lineTo(35, 370);
        L09.crc2.lineTo(40, 370);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.translate(50, 20);
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 350);
        L09.crc2.lineTo(20, 370);
        L09.crc2.lineTo(25, 370);
        L09.crc2.lineTo(15, 390);
        L09.crc2.lineTo(20, 390);
        L09.crc2.lineTo(10, 410);
        L09.crc2.lineTo(50, 410);
        L09.crc2.lineTo(40, 390);
        L09.crc2.lineTo(45, 390);
        L09.crc2.lineTo(35, 370);
        L09.crc2.lineTo(40, 370);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.translate(200, 2);
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 350);
        L09.crc2.lineTo(20, 370);
        L09.crc2.lineTo(25, 370);
        L09.crc2.lineTo(15, 390);
        L09.crc2.lineTo(20, 390);
        L09.crc2.lineTo(10, 410);
        L09.crc2.lineTo(50, 410);
        L09.crc2.lineTo(40, 390);
        L09.crc2.lineTo(45, 390);
        L09.crc2.lineTo(35, 370);
        L09.crc2.lineTo(40, 370);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.translate(40, -20);
        L09.crc2.beginPath();
        L09.crc2.moveTo(30, 350);
        L09.crc2.lineTo(20, 370);
        L09.crc2.lineTo(25, 370);
        L09.crc2.lineTo(15, 390);
        L09.crc2.lineTo(20, 390);
        L09.crc2.lineTo(10, 410);
        L09.crc2.lineTo(50, 410);
        L09.crc2.lineTo(40, 390);
        L09.crc2.lineTo(45, 390);
        L09.crc2.lineTo(35, 370);
        L09.crc2.lineTo(40, 370);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
        L09.crc2.translate(80, 350);
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 0);
        L09.crc2.lineTo(-25, 50);
        L09.crc2.lineTo(0, 50);
        L09.crc2.lineTo(-50, 100);
        L09.crc2.lineTo(0, 100);
        L09.crc2.lineTo(-75, 150);
        L09.crc2.lineTo(0, 150);
        L09.crc2.closePath();
        L09.crc2.fill();
        L09.crc2.stroke();
    }
    function drawBeeStock() {
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "gold";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.scale(0.5, 0.5);
        pattern.stroke();
        L09.crc2.fillStyle = L09.crc2.createPattern(pattern.canvas, "repeat");
        L09.crc2.fillRect(0, 0, L09.crc2.canvas.width, L09.crc2.canvas.height);
        L09.crc2.save();
        L09.crc2.beginPath();
        L09.crc2.lineWidth = 3;
        L09.crc2.ellipse(-25, 80, 20, 30, 0, 20, 40);
        L09.crc2.closePath();
        L09.crc2.fillStyle = pattern;
        L09.crc2.strokeStyle = "black";
        L09.crc2.stroke();
        L09.crc2.fill();
        console.log("ellipse drawn");
    }
    function update() {
        console.log("Update");
        L09.crc2.putImageData(imgData, 0, 0);
        for (let bee of bees) {
            bee.move(1 / 50);
            bee.draw();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.draw();
        }
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=wiese9.js.map