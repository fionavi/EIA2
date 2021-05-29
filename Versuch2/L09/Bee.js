"use strict";
var L09;
(function (L09) {
    class Bee extends L09.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("BEE CONSTRUCTOR");
            this.position = new L09.Vector(_x, _y);
            this.velocity = new L09.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Bee move");
            super.move(_timeslice);
        }
        draw() {
            L09.crc2.save();
            // crc2.translate(this.position.x, this.position.y);
            L09.crc2.translate(0, 0);
            // X 130 => x 0;  y 365
            console.log("Bee is drawing", this.position);
            L09.crc2.save();
            L09.crc2.translate(this.position.x, this.position.y);
            L09.crc2.fillStyle = "white";
            L09.crc2.beginPath();
            L09.crc2.ellipse(210, 80, 10, 15, 10, 20, 40);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.ellipse(200, 80, 10, 15, 0, 20, 40);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            let pattern = document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 20;
            pattern.canvas.height = 20;
            pattern.fillStyle = "black";
            pattern.strokeStyle = "gold";
            pattern.lineWidth = 5;
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 0);
            pattern.lineTo(0, 20);
            pattern.moveTo(10, 0);
            pattern.lineTo(10, 20);
            pattern.moveTo(20, 0);
            pattern.lineTo(20, 20);
            pattern.stroke();
            L09.crc2.fillStyle = L09.crc2.createPattern(pattern.canvas, "repeat");
            L09.crc2.beginPath();
            L09.crc2.ellipse(200, 100, 10, 15, 30, 20, 40);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.restore();
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
    L09.Bee = Bee;
})(L09 || (L09 = {}));
//# sourceMappingURL=Bee.js.map