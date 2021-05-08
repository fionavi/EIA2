"use strict";
var L08;
(function (L08) {
    let colors1 = ["black", "	Brown", "Chocolate", "Maroon"];
    let colors2 = ["Teal", "MediumAquamarine", "	PaleGreen", "	PowderBlue"];
    let randomC1 = Math.floor(Math.random() * colors1.length);
    let random2C1 = Math.floor(Math.random() * colors1.length);
    let randomC2 = Math.floor(Math.random() * colors2.length);
    let random2C2 = Math.floor(Math.random() * colors2.length);
    console.log(randomC1, colors1[randomC1]);
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawPattern();
        drawCornerCircles({ x: 50, y: 25 });
        drawObject();
        drawAnotherObject();
        drawRects({ x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 200) });
        drawRects({ x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 20) });
        drawRects({ x: Math.floor(Math.random() * -100), y: Math.floor(Math.random() * 200) });
        drawRects({ x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 300) });
        drawRects({ x: Math.floor(Math.random() * 300), y: Math.floor(Math.random() * 200) });
        drawSmallCircles({ x: 300, y: 600 }, { x: 600, y: 600 });
        drawEllipseAndCurve();
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, colors1[randomC1]);
        gradient.addColorStop(1, colors1[random2C1]);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawPattern() {
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 20;
        pattern.canvas.height = 20;
        pattern.strokeStyle = "Lavender";
        pattern.moveTo(5, 0);
        pattern.lineTo(5, 20);
        pattern.lineTo(10, 20);
        pattern.lineTo(10, 0);
        pattern.lineTo(15, 0);
        pattern.lineTo(15, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(20, 0);
        pattern.stroke();
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCornerCircles(_position) {
        for (let index = 0; index < 20; index++) {
            let r2 = Math.floor(Math.random() * 1000);
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.strokeStyle = colors2[randomC2];
            crc2.stroke();
            crc2.restore();
        }
    }
    function drawEllipseAndCurve() {
        crc2.save();
        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.ellipse(Math.floor(Math.random() * 500), 300, 100, 30, Math.floor(Math.random() * 100), 32, 42);
        crc2.fillStyle = "black";
        crc2.strokeStyle = colors2[randomC2];
        crc2.stroke();
        crc2.fill();
        console.log("ellipse drawn");
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 100, 550, 300, Math.floor(Math.random() * 20));
        crc2.bezierCurveTo(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 10, 50, 500, 500);
        crc2.strokeStyle = "white";
        crc2.stroke();
    }
    function drawObject() {
        crc2.lineWidth = 5;
        crc2.strokeStyle = colors2[random2C2];
        crc2.save();
        crc2.beginPath();
        crc2.lineWidth = Math.floor(Math.random() * 30);
        crc2.setLineDash([4, 2]);
        crc2.lineDashOffset = 0;
        crc2.strokeRect(10, 10, 100, 100);
        crc2.moveTo(0, Math.floor(Math.random() * 250));
        crc2.lineTo(300, Math.floor(Math.random() * 200));
        crc2.lineTo(300, Math.floor(Math.random() * 500));
        crc2.lineTo(0, Math.floor(Math.random() * 500));
        crc2.closePath();
        crc2.stroke();
        crc2.restore();
    }
    function drawAnotherObject() {
        crc2.strokeStyle = colors2[randomC2];
        crc2.save();
        crc2.beginPath();
        crc2.lineWidth = Math.floor(Math.random() * 30);
        crc2.moveTo(50, Math.floor(Math.random() * 40));
        crc2.lineTo(100, Math.floor(Math.random() * 400));
        crc2.lineTo(500, Math.floor(Math.random() * 50));
        crc2.lineTo(60, Math.floor(Math.random() * 200));
        crc2.closePath();
        crc2.stroke();
        crc2.restore();
    }
    function drawRects(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = colors2[randomC2 + 2];
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(50, 50);
        crc2.lineTo(100, 100);
        crc2.lineTo(150, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.translate(50, 50);
        crc2.lineTo(100, 100);
        crc2.lineTo(150, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(50, 50);
        crc2.lineTo(100, 100);
        crc2.lineTo(150, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.restore();
    }
    function drawSmallCircles(_position, _size) {
        let nParticles = 50;
        let radiusParticle = Math.floor(Math.random() * 20);
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = colors2[randomC2 + 1];
        crc2.lineWidth = 1;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.stroke(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=canvas.js.map