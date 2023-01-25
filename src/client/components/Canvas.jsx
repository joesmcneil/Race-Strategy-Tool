import React, { useState, useRef, useEffect } from 'react'
import {cover, contain} from 'intrinsic-scale';

const Canvas = props => {

    const canvasRef = useRef(null)

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const draw = ctx => {

        // track
        ctx.beginPath();
        ctx.arc(50, 100, 20, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();
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
