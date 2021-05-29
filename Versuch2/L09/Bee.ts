namespace L09 {

    export class Bee extends Moveable {
        position: Vector;
        velocity: Vector;
        type: number;

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("BEE CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Bee move");
            super.move(_timeslice);

        }

        draw(): void {
          
            crc2.save();
           // crc2.translate(this.position.x, this.position.y);
            crc2.translate(0, 0);
            // X 130 => x 0;  y 365

            console.log("Bee is drawing", this.position);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.ellipse(210, 80, 10, 15, 10, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(200, 80, 10, 15, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 20;
            pattern.canvas.height = 20;

            pattern.fillStyle = "black";
            pattern.strokeStyle = "gold";
            pattern.lineWidth = 5;
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 0);
            pattern.lineTo(0, 20);
            pattern.moveTo(10, 0);
            pattern.lineTo(10, 20);
            pattern.moveTo(20, 0);
            pattern.lineTo(20, 20);
            pattern.stroke();

            crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");


            crc2.beginPath();
            crc2.ellipse(200, 100, 10, 15, 30, 20, 40);
            crc2.closePath();
            crc2.fill();

            crc2.restore();
            
            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
}