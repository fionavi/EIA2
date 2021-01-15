"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Skier extends L11_Skipiste.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("SKIER CONSTRUCTOR");
            this.position = new L11_Skipiste.Vector(_x, _y);
            this.velocity = new L11_Skipiste.Vector(0, 0);
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
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            // X 130 => x 0;  y 365
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.lineWidth = 3;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(25, -5);
            L11_Skipiste.crc2.lineTo(0, 0);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(25, -5);
            L11_Skipiste.crc2.lineTo(0, 0);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.fillStyle = "red";
            L11_Skipiste.crc2.strokeStyle = L11_Skipiste.crc2.fillStyle;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.ellipse(20, -15, 11, 7, 10, 10, 99);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.lineWidth = 5;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(15, -20);
            L11_Skipiste.crc2.lineTo(0, -28);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.strokeStyle = "grey";
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(0, -28);
            L11_Skipiste.crc2.lineTo(10, 5);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.fillStyle = "Bisque";
            L11_Skipiste.crc2.strokeStyle = "grey";
            L11_Skipiste.crc2.lineWidth = 1;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.ellipse(10, -30, 5, 5, 10, 10, 99);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.fillStyle = "black";
            L11_Skipiste.crc2.strokeStyle = L11_Skipiste.crc2.fillStyle;
            L11_Skipiste.crc2.lineWidth = 1;
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.ellipse(12, -30, 5, 4, 10, 10, 99);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.restore();
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
    L11_Skipiste.Skier = Skier;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=skier11.js.map