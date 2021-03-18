namespace L08_Skipiste {

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
        drawSun({ x: 50, y: 25 });
        drawCloud({ x: 190, y: 75 }, { x: 50, y: 25 });
        drawCloud({ x: 70, y: 170 }, { x: 50, y: 25 });
        drawPiste();
        drawLift();
        drawTrees();
        drawSkier({ x: 100, y: 200 });
        drawSkier({ x: 50, y: 20 });
        drawSkier({ x: -100, y: 200 });
        drawSkier({ x: 100, y: -90 });
        drawSnow({ x: 300, y: 600 }, { x: 600, y: 600 });

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

    function drawSun(_position: Vector): void {
        console.log("Sun is drawing", _position);

        let r1: number = 30;
        let r2: number = 80;
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

        let nParticles: number = 20;
        let radiusParticle: number = 20;
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

    function drawPiste(): void {
        crc2.fillStyle = "aliceblue";
        crc2.strokeStyle = "aliceblue";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(300, 200);
        crc2.lineTo(300, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }

    function drawLift(): void {
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(150, 500);
        crc2.lineTo(350, 300);
        crc2.lineTo(180, 500);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(210, 465);
        crc2.lineTo(210, 485);
        crc2.lineTo(230, 470);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(250, 400);
        crc2.lineTo(250, 420);
        crc2.lineTo(230, 425);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(290, 370);
        crc2.lineTo(290, 395);
        crc2.lineTo(315, 380);
        crc2.fill();
        crc2.stroke();


        crc2.fillStyle = "DimGrey";
        crc2.strokeStyle = "DimGrey";
        crc2.beginPath();
        crc2.moveTo(150, 525);
        crc2.lineTo(150, 475);
        crc2.lineTo(200, 475);
        crc2.lineTo(200, 525);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "maroon";
        crc2.strokeStyle = "maroon";
        crc2.beginPath();
        crc2.moveTo(150, 475);
        crc2.lineTo(200, 475);
        crc2.lineTo(175, 450);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    function drawTrees(): void {
        console.log("Trees are drawing");

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

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(50, 380);
        crc2.lineTo(40, 400);
        crc2.lineTo(45, 400);
        crc2.lineTo(35, 420);
        crc2.lineTo(40, 420);
        crc2.lineTo(30, 440);
        crc2.lineTo(70, 440);
        crc2.lineTo(60, 420);
        crc2.lineTo(65, 420);
        crc2.lineTo(55, 400);
        crc2.lineTo(60, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(70, 390);
        crc2.lineTo(60, 410);
        crc2.lineTo(65, 410);
        crc2.lineTo(55, 430);
        crc2.lineTo(60, 430);
        crc2.lineTo(50, 450);
        crc2.lineTo(90, 450);
        crc2.lineTo(80, 430);
        crc2.lineTo(85, 430);
        crc2.lineTo(75, 410);
        crc2.lineTo(80, 410);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(10, 380);
        crc2.lineTo(0, 400);
        crc2.lineTo(5, 400);
        crc2.lineTo(-5, 420);
        crc2.lineTo(0, 420);
        crc2.lineTo(-10, 440);
        crc2.lineTo(30, 440);
        crc2.lineTo(20, 420);
        crc2.lineTo(25, 420);
        crc2.lineTo(15, 400);
        crc2.lineTo(20, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(30, 399);
        crc2.lineTo(20, 419);
        crc2.lineTo(25, 419);
        crc2.lineTo(15, 439);
        crc2.lineTo(20, 439);
        crc2.lineTo(10, 459);
        crc2.lineTo(50, 459);
        crc2.lineTo(40, 439);
        crc2.lineTo(45, 439);
        crc2.lineTo(35, 419);
        crc2.lineTo(40, 419);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawSkier(_position: Vector): void {

        console.log("skier is drawing", _position);
        let colors: string[] = ["darkviolet", "midnightblue", "MediumSpringGreen", "CadetBlue", "DarkSlateGray"];
        let randomcolor: string = colors[Math.floor(Math.random() * colors.length)];

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(155, 360);
        crc2.lineTo(130, 365);
        crc2.closePath();
        crc2.stroke();

        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(155, 355);
        crc2.lineTo(130, 360);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = randomcolor;
        crc2.strokeStyle = crc2.fillStyle;
        crc2.beginPath();
        crc2.ellipse(150, 350, 11, 7, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(145, 345);
        crc2.lineTo(130, 347);
        crc2.closePath();
        crc2.stroke();

        crc2.strokeStyle = "grey";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(130, 347);
        crc2.lineTo(140, 370);
        crc2.closePath();
        crc2.stroke();


        crc2.fillStyle = "Bisque";
        crc2.strokeStyle = "grey";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.ellipse(140, 336, 5, 5, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = randomcolor;
        crc2.strokeStyle = crc2.fillStyle;
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.ellipse(142, 334, 5, 4, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();



        crc2.restore();

    }

    function drawSnow(_position: Vector, _size: Vector): void {
        console.log("Snowflake is drawing", _position, _size);

        let nParticles: number = 500;
        let radiusParticle: number = 2;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");


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

}

