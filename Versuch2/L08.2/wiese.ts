namespace L08 {

    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);


        drawBackground();
        
        drawSun({x: 300, y: 10});
        drawCloud({ x: 100, y: 100 }, { x: 100, y: 50 });
        drawCloud({ x: 170, y: 200 }, { x: 100, y: 50 });
        drawMountains();
        drawLawn();
        drawDaisy({ x: -20, y: 420 });
        drawTulip({ x: 60, y: 300 });
        drawHortensia({ x: 70, y: 440 });
        drawDaisy({ x: -100, y: 470 });
        drawTulip({ x: 200, y: 400 });
        drawHortensia({ x: 320, y: 560 });
        drawDaisy({ x: 60, y: 470 });
        
        drawTrees();
        drawBeeStock();
       


    }

    function drawBackground(): void {
        console.log("Background is drawing");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


    }

    
    function drawHortensia(_position: Vector): void {

        console.log("Hortensia is drawing", _position);

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "green";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(10, 15);
        crc2.lineTo(-5, 20);
        crc2.lineTo(0, 50);

        crc2.stroke();


        let nParticles: number = 100;
        let radiusParticle: number = 4;
        let particle: Path2D = new Path2D();

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);



       
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 1;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * (2 * Math.PI) * 5;
            let y: number = - (Math.random() * (2 * Math.PI) * 5);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.stroke(particle);
            crc2.restore();
        }

        crc2.restore();

    }

    function drawDaisy(_position: Vector): void {

        console.log("Daisy is drawing", _position);

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "green";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 180);
        crc2.closePath();
        crc2.stroke();


        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.ellipse(200, 130, 10, 20, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(200, 70, 10, 20, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(170, 100, 20, 10, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(230, 100, 20, 10, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(175, 80, 20, 10, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(222, 79, 20, 10, 40, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(177, 123, 20, 10, 40, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(225, 122, 20, 10, 10, 20, 40);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

    function drawTulip(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(75, 100);
        crc2.lineTo(75, 200);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(90, 140, 10, 25, 10, 20, 40);
        crc2.closePath();
        crc2.fill();



        crc2.fillStyle = "red";
        crc2.beginPath();
        crc2.moveTo(30, 50);
        crc2.lineTo(50, 100);
        crc2.lineTo(100, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(75, 50);
        crc2.lineTo(50, 100);
        crc2.lineTo(100, 100);
        crc2.closePath();
        crc2.fill();
        crc2.moveTo(120, 50);
        crc2.lineTo(50, 100);
        crc2.lineTo(100, 100);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

    function drawSun(_position: Vector): void {
        console.log("Sun is drawing", _position);

        let r1: number = 40;
        let r2: number = 130;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();



    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud is drawing", _position, _size);

        let nParticles: number = 75;
        let radiusParticle: number = 15;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

   
   
    function drawMountains(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.4, "grey");
        gradient.addColorStop(1, "darkgrey");

        crc2.fillStyle = gradient;
        crc2.strokeStyle = "black";

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(100, 300);
        crc2.lineTo(200, 150);
        crc2.lineTo(300, 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(200, 300);
        crc2.lineTo(300, 150);
        crc2.lineTo(400, 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(-50, 300);
        crc2.lineTo(100, 100);
        crc2.lineTo(250, 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();

    }

    function drawLawn(): void {
        crc2.strokeStyle = "black";
        crc2.fillStyle = "lightgreen";

        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(360, 300);
        crc2.lineTo(360, 640);
        crc2.lineTo(0, 640);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();




    }

    function drawTrees(): void {
        console.log("Trees are drawing");

        crc2.translate(-0, 0);


        crc2.lineWidth = 2;

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.translate(-10, -70);

        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.translate(50, 20);

        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.translate(200, 2);

        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        crc2.translate(40, -20);

        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.translate(80, 350);


        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-25, 50);
        crc2.lineTo(0, 50);
        crc2.lineTo(-50, 100);
        crc2.lineTo(0, 100);
        crc2.lineTo(-75, 150);
        crc2.lineTo(0, 150);


        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawBeeStock(): void {
        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "gold";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.scale(0.5, 0.5);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        crc2.save();
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.ellipse(-25, 80, 20, 30, 0, 20, 40);
        crc2.closePath();
        crc2.fillStyle = pattern;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        console.log("ellipse drawn");
    }




  

}

