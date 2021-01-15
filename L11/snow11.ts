namespace L11_Skipiste {

    export class Snow extends Moveable {
       


        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("SNOW CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Snow move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= 100;
            }

        }

        // draw(_position: number, _x: number, _y: number, _size: number): void {
        //     console.log("Snow draw");

        //     let nParticles: number = 500;
        //     let radiusParticle: number = 2;
        //     let particle: Path2D = new Path2D();
        //     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        //     particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        //     gradient.addColorStop(0, "Azure");
        //     gradient.addColorStop(0, "lightgrey");


        //     crc2.save();
        //     crc2.translate(_position.x, _position.y);
        //     crc2.fillStyle = gradient;

        //     for (let drawn: number = 0; drawn < nParticles; drawn++) {
        //         crc2.save();
        //         let x: number = (Math.random() - 0.5) * _size.x;
        //         let y: number = - (Math.random() * _size.y);
        //         crc2.translate(x, y);
        //         crc2.fill(particle);
        //         crc2.restore();
        //     }

        //     crc2.restore();

        // }
    }

}
