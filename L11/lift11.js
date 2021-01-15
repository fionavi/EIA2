"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Lift extends L11_Skipiste.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("LIFT CONSTRUCTOR");
            this.position = new L11_Skipiste.Vector(_x, _y);
            this.velocity = new L11_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Lift move");
            let offset = new L11_Skipiste.Vector(this.velocity.x, this.velocity.y);
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
            if (this.position.y > L11_Skipiste.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
        draw() {
            console.log("Lift draw");
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(210, 465);
            L11_Skipiste.crc2.lineTo(210, 485);
            L11_Skipiste.crc2.lineTo(230, 470);
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(250, 400);
            L11_Skipiste.crc2.lineTo(250, 420);
            L11_Skipiste.crc2.lineTo(230, 425);
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(290, 370);
            L11_Skipiste.crc2.lineTo(290, 395);
            L11_Skipiste.crc2.lineTo(315, 380);
            L11_Skipiste.crc2.stroke();
        }
    }
    L11_Skipiste.Lift = Lift;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=lift11.js.map