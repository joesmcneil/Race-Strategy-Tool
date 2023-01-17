import React, { useState, useRef, useEffect } from 'react'

const Canvas = props => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    console.log(ref);

    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2*Math.PI)
        ctx.fill()
      }

    useEffect(() => {

        console.log(ref);
        setWidth(ref.clientWidth);

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        console.log(context)
        console.log(canvas)

        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} {...props}/>

}

export default Canvas
