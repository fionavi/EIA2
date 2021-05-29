"use strict";
var L09;
(function (L09) {
    class Cloud extends L09.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("CLOUD CONSTRUCTOR");
            this.position = new L09.Vector(_x, _y);
            this.velocity = new L09.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Cloud move");
            super.move(_timeslice);
        }
        draw() {
            L09.crc2.save();
            // crc2.translate(this.position.x, this.position.y);
            L09.crc2.translate(0, 0);
            // X 130 => x 0;  y 365
            console.log("Cloud is drawing", this.position);
            L09.crc2.save();
            L09.crc2.translate(this.position.x, this.position.y);
            let nParticles = 75;
            let radiusParticle = 15;
            let particle = new Path2D();
            let gradient = L09.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
            gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");
            L09.crc2.save();
            L09.crc2.translate(this.position.x, this.position.y);
            L09.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09.crc2.save();
                let x = (Math.random() - 0.5) * 3;
                let y = -(Math.random() * 3);
                L09.crc2.translate(x, y);
                L09.crc2.fill(particle);
                L09.crc2.restore();
            }
            L09.crc2.restore();
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
    L09.Cloud = Cloud;
})(L09 || (L09 = {}));
//# sourceMappingURL=Cloud.js.map