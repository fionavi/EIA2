namespace L11_Skipiste {

    export class Lift extends Moveable {
        
        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("LIFT CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        move(_timeslice: number): void {
            console.log("Lift move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= 100;
            }

        }

        draw(): void {
            console.log("Lift draw");
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(210, 465);
            crc2.lineTo(210, 485);
            crc2.lineTo(230, 470);
            
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(250, 400);
            crc2.lineTo(250, 420);
            crc2.lineTo(230, 425);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(290, 370);
            crc2.lineTo(290, 395);
            crc2.lineTo(315, 380);
            crc2.stroke();
        }
    }
}




