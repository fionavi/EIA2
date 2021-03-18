"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    class Skier {
        constructor(_position, _x, _y) {
            console.log("SKIER CONSTRUCTOR");
            this.position = new L09_Skipiste.Vector(_x, _y);
            this.velocity = new L09_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Skier move");
            let offset = new L09_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 200) {
                this.position.x += 100;
            }
            if (this.position.y < 200) {
                this.position.y == 10;
            }
            if (this.position.x > 300) {
                this.position.x == 300;
            }
            if (this.position.y > L09_Skipiste.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
        draw() {
            console.log("Skier draw");
            //crc2.save();
            console.log("skier is drawing", this.position);
            let colors = ["darkviolet", "midnightblue", "MediumSpringGreen", "CadetBlue", "DarkSlateGray"];
            let randomcolor = colors[Math.floor(Math.random() * colors.length)];
            L09_Skipiste.crc2.save();
            L09_Skipiste.crc2.translate(this.position.x, this.position.y);
            // X 130 => x 0;  y 365
            L09_Skipiste.crc2.strokeStyle = "black";
            L09_Skipiste.crc2.lineWidth = 3;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.moveTo(25, -5);
            L09_Skipiste.crc2.lineTo(0, 0);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.strokeStyle = "black";
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.moveTo(25, -5);
            L09_Skipiste.crc2.lineTo(0, 0);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.fillStyle = randomcolor;
            L09_Skipiste.crc2.strokeStyle = L09_Skipiste.crc2.fillStyle;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.ellipse(20, -15, 11, 7, 10, 10, 99);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.fill();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.lineWidth = 5;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.moveTo(15, -20);
            L09_Skipiste.crc2.lineTo(0, -28);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.strokeStyle = "grey";
            L09_Skipiste.crc2.lineWidth = 2;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.moveTo(0, -28);
            L09_Skipiste.crc2.lineTo(10, 5);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.fillStyle = "Bisque";
            L09_Skipiste.crc2.strokeStyle = "grey";
            L09_Skipiste.crc2.lineWidth = 1;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.ellipse(10, -30, 5, 5, 10, 10, 99);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.fill();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.fillStyle = randomcolor;
            L09_Skipiste.crc2.strokeStyle = L09_Skipiste.crc2.fillStyle;
            L09_Skipiste.crc2.lineWidth = 1;
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.ellipse(12, -30, 5, 4, 10, 10, 99);
            L09_Skipiste.crc2.closePath();
            L09_Skipiste.crc2.fill();
            L09_Skipiste.crc2.stroke();
            L09_Skipiste.crc2.restore();
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
    L09_Skipiste.Skier = Skier;
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=skier.js.map