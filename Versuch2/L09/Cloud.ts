namespace L09 {

    export class Cloud extends Moveable {
        position: Vector;
        velocity: Vector;
        type: number;

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("CLOUD CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Cloud move");
            super.move(_timeslice);

        }

        draw(): void {

            crc2.save();
            // crc2.translate(this.position.x, this.position.y);
            crc2.translate(0, 0);
            // X 130 => x 0;  y 365

            console.log("Cloud is drawing", this.position);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);


            let nParticles: number = 75;
            let radiusParticle: number = 15;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
            gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");


            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * 3;
                let y: number = - (Math.random() * 3);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();

            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
}