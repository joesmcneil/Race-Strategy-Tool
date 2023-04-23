import React, { useState, useRef, useEffect } from 'react'

let racer = {
    velocity: 20,
    pos: 0,
    x: 0,
    y: 0,
}

const trackRadius = 2000; // m
const trackCircumference = 2 * Math.PI * trackRadius; // m

const Canvas = ({ racers }) => {
    const canvasRef = useRef(null);
    const [time, setTime]= useState(0);
    const height = 1000;
    const width = 1000;

    // The interval at which the track rerenders
    const timeStep = 16.6; // ms

    // The initial racer position
    let racerPosition = 0;

    const drawTrack = ctx => {
        // Track
        ctx.beginPath();
        ctx.arc(500, 500, trackRadius, 0, 2 * Math.PI);
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

    function updateRacer () {
        const angularVelocityRad = racer.velocity / trackRadius;
        racer.pos += angularVelocityRad;
        const degrees = (racer.pos * 57.2957795130823208767981548141) % trackCircumference;

        // Note that the addition of the radius and (35 + 2) (radius of the car)
        // is used as an offset to center the car on the track assuming the track
        // is a circle and the center of the circle is at w/2, h/2.. This could be
        // rectified by adding an offset of the origin of the circle
        const offset = trackRadius + (35 / 2);
        racer.x = (trackRadius * Math.sin(Math.PI * 2 * degrees / 360)) + offset;
        racer.y = (trackRadius * Math.cos(Math.PI * 2 * degrees / 360)) + offset;
    }

    function drawRacer (ctx, colour) {
        ctx.beginPath();
        ctx.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
        ctx.lineTo(racer.x, racer.y);
        ctx.lineWidth = 5;
        ctx.strokeStyle = colour;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(racer.x, racer.y, 35, 0, 2 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
    }

    const draw = ctx => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // racers.forEach(drawRacer(ctx, racers.colour))
        drawTrack(ctx);
        try {
            for (const racer of racers) {
                updateRacer();
                drawRacer(ctx, racer.racerColour);
                console.log(racer.racerColour);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        setInterval( () => {
            setTime(time => time + 1)
        }, timeStep)
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        draw(context);
    }, [time, racers]);

    return (
        <canvas ref={canvasRef} height={height} width={width}/>
    )
}

export default Canvas