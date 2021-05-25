"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    class Moveable {
        constructor(_position, _x, _y) {
            console.log("MOVEABLE CONSTRUCTOR");
            this.position = new L10_Skipiste.Vector(_x, _y);
            this.velocity = new L10_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offset = new L10_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 200) {
                this.position.x += 100;
            }
            if (this.position.y < 200) {
                this.position.y = 10;
            }
            if (this.position.x > 300) {
                this.position.x = 300;
            }
            if (this.position.y > L10_Skipiste.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    L10_Skipiste.Moveable = Moveable;
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=moveable10.js.map