"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Snow extends L11_Skipiste.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("SNOW CONSTRUCTOR");
            this.position = new L11_Skipiste.Vector(_x, _y);
            this.velocity = new L11_Skipiste.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Snow move");
            let offset = new L11_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 300) {
                this.position.x += 100;
            }
            if (this.position.y < 0) {
                this.position.y += 100;
            }
            if (this.position.x > 300) {
                this.position.x -= 300;
            }
            if (this.position.y > L11_Skipiste.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
    }
    L11_Skipiste.Snow = Snow;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=snow10.js.map