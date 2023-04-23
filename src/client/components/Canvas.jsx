import React, { useState, useRef, useEffect } from 'react'

const Canvas = ({ racers }) => {

    const canvasRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [time, setTime]= useState(0);
    const radius = 480;

    // useEffect called on mount to update time by 5 every 16 ms.
    // code initially in component code rather than on mount, meaning interval was being reset therefore resetting the value of time.

    useEffect(() => {
        setInterval( () => {
            setTime(time => time + 5)
        }, 16)
    }, []);

    const drawTrack = ctx => {
        // Track
        ctx.beginPath();
        ctx.arc(500, 500, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'lightgreen';
        ctx.lineWidth = 15;
        ctx.stroke();

        // Timing circle
        ctx.beginPath();
        ctx.arc(500, 500, 200, 0, 2 * Math.PI);
        ctx.strokeStyle = 'lightblue';
        ctx.lineWidth = 10;
        ctx.stroke();
    }

    // Setting a manual speed for the racer;
    const racerSpeed = 100;

    // The interval at which the track rerenders
    const raceTick = 10;

    // The initial racer position
    let racerPosition = 0;

    const distanceTravelledEachUpdate = (racerSpeed * 1000 / 60 / 60) * (raceTick / 1000);

    function drawRacer (ctx, colour) {

        const circumference = 2 * Math.PI * radius;
        const position = time % circumference;
        const degrees = position * 360 / circumference;

        // Note that the addition of the radius and (35 + 2) (radius of the car)
        // is used as an offset to center the car on the track assuming the track
        // is a circle and the center of the circle is at w/2, h/2.. This could be
        // rectified by adding an offset of the origin of the circle 
        const offset = radius + (35 / 2);
        const x = (radius * Math.sin(Math.PI * 2 * degrees / 360)) + offset;
        const y = (radius * Math.cos(Math.PI * 2 * degrees / 360)) + offset;

        ctx.beginPath();
        ctx.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
        ctx.lineTo(x, y);
        ctx.lineWidth = 5;
        ctx.strokeStyle = colour;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 35, 0, 2 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
    }

    const draw = ctx => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // racers.forEach(drawRacer(ctx, racers.colour))
        drawTrack(ctx);
        try {
            for (const racer of racers) {
                drawRacer(ctx, racer.racerColour);
                console.log(racer.racerColour);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        setHeight(canvasRef.current.parentElement.offsetHeight);
        setWidth(canvasRef.current.parentElement.offsetWidth);

        draw(context);
    }, [draw, height, width, time, racers]);

    return (
    <canvas ref={canvasRef} height={height} width={width}/>
    )
}

export default Canvas
