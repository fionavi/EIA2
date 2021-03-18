namespace L11_Skipiste {

    export class Skier extends Moveable {
        
        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("SKIER CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Skier move");
            super.move(_timeslice);
            
        }

        draw(): void {
            console.log("Skier draw");
            //crc2.save();

            console.log("skier is drawing", this.position);
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
// X 130 => x 0;  y 365
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo(25, -5);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(25, -5);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "red";
            crc2.strokeStyle = crc2.fillStyle;
            crc2.beginPath();
            crc2.ellipse(20, -15, 11, 7, 10, 10, 99);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.moveTo(15, -20);
            crc2.lineTo(0, -28);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "grey";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(0, -28);
            crc2.lineTo(10, 5);
            crc2.closePath();
            crc2.stroke();


            crc2.fillStyle = "Bisque";
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.ellipse(10, -30, 5, 5, 10, 10, 99);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "black";
            crc2.strokeStyle = crc2.fillStyle;
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.ellipse(12, -30, 5, 4, 10, 10, 99);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.restore();

            //crc2.translate(this.position.x, this.position.y);
            //crc2.scale();
            //crc2.stroke(skierPaths[]);
        }
    }
}