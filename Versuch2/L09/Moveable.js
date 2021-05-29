"use strict";
var L09;
(function (L09) {
    class Moveable {
        constructor(_position, _x, _y) {
            console.log("MOVEABLE CONSTRUCTOR");
            this.position = new L09.Vector(_x, _y);
            this.velocity = new L09.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offset = new L09.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += 100;
            }
            if (this.position.y < 100) {
                this.position.y = 300;
            }
            if (this.position.x > 300) {
                this.position.x -= 200;
            }
            if (this.position.y < L09.crc2.canvas.height) {
                this.position.y += 300;
            }
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    L09.Moveable = Moveable;
})(L09 || (L09 = {}));
//# sourceMappingURL=Moveable.js.map