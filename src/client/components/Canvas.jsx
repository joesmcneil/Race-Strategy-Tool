import React, { useState, useRef, useEffect } from 'react'
import {cover, contain} from 'intrinsic-scale';

const Canvas = props => {

    const canvasRef = useRef(null)

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const racePath = {
        x:500,
        y:500,
        r:200
    }

    const draw = ctx => {

        // track
        ctx.beginPath();
        ctx.arc(500, 500, 480, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;
        ctx.stroke();

        // timing circle
        ctx.beginPath();
        ctx.arc(500, 500, 200, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;
        ctx.stroke();

        // racer 1
        ctx.beginPath();
        ctx.arc(325, 50, 35, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();

        // racer 2
        ctx.beginPath();
        ctx.arc(650, 50, 35, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();

      }

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        setHeight(canvasRef.current.parentElement.offsetHeight);
        setWidth(canvasRef.current.parentElement.offsetWidth);

        draw(context);
    }, [draw, height, width]);

    return <canvas ref={canvasRef} height={height} width={width} {...props}/>

}



export default Canvas
