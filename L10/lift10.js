"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    class Lift extends L10_Skipiste.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("LIFT CONSTRUCTOR");
            this.position = new L10_Skipiste.Vector(_x, _y);
            this.velocity = new L10_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Lift move");
            let offset = new L10_Skipiste.Vector(this.velocity.x, this.velocity.y);
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
            if (this.position.y > L10_Skipiste.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
        draw() {
            console.log("Lift draw");
            L10_Skipiste.crc2.strokeStyle = "black";
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(210, 465);
            L10_Skipiste.crc2.lineTo(210, 485);
            L10_Skipiste.crc2.lineTo(230, 470);
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(250, 400);
            L10_Skipiste.crc2.lineTo(250, 420);
            L10_Skipiste.crc2.lineTo(230, 425);
            L10_Skipiste.crc2.stroke();
            L10_Skipiste.crc2.beginPath();
            L10_Skipiste.crc2.moveTo(290, 370);
            L10_Skipiste.crc2.lineTo(290, 395);
            L10_Skipiste.crc2.lineTo(315, 380);
            L10_Skipiste.crc2.stroke();
        }
    }
    L10_Skipiste.Lift = Lift;
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=lift10.js.map