"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    class Skier extends L10_Skipiste.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("SKIER CONSTRUCTOR");
            this.position = new L10_Skipiste.Vector(_x, _y);
            this.velocity = new L10_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Skier move");
            super.move(_timeslice);
        }
        draw() {
            console.log("Skier draw");
            //crc2.save();
            console.log("skier is drawing", this.position);
            L10_Skipiste.crc2.save();
            L10_Skipiste.crc2.translate(this.position.x, this.position.y);
            // X 130 => x 0;  y 365
            L10_Skipiste.crc2.strokeStyle = "black";
            L10_Skipiste.crc2.lineWidth = 3;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(25, -5);
            L10_Skipiste.crc2.lineTo(0, 0);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.strokeStyle = "black";
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(25, -5);
            L10_Skipiste.crc2.lineTo(0, 0);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.fillStyle = "red";
            L10_Skipiste.crc2.strokeStyle = L10_Skipiste.crc2.fillStyle;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.ellipse(20, -15, 11, 7, 10, 10, 99);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.fill();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.lineWidth = 5;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(15, -20);
            L10_Skipiste.crc2.lineTo(0, -28);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.strokeStyle = "grey";
            L10_Skipiste.crc2.lineWidth = 2;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(0, -28);
            L10_Skipiste.crc2.lineTo(10, 5);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.fillStyle = "Bisque";
            L10_Skipiste.crc2.strokeStyle = "grey";
            L10_Skipiste.crc2.lineWidth = 1;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.ellipse(10, -30, 5, 5, 10, 10, 99);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.fill();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.fillStyle = "black";
            L10_Skipiste.crc2.strokeStyle = L10_Skipiste.crc2.fillStyle;
            L10_Skipiste.crc2.lineWidth = 1;
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.ellipse(12, -30, 5, 4, 10, 10, 99);
            L10_Skipiste.crc2.closePath();
            L10_Skipiste.crc2.fill();
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.restore();
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
    L10_Skipiste.Skier = Skier;
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=skier10.js.map