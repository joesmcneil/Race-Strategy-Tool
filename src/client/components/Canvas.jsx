import React, { useState, useRef, useEffect } from 'react';

export class Racer {
  constructor(x, y, angularVelocity, velocity, alias, racerColour, racerNumber, interval, position) {
    this.x = x;
    this.y = y;
    this.angularVelocity = angularVelocity;
    this.velocity = velocity;
    this.alias = alias;
    this.racerColour = racerColour;
    this.racerNumber = racerNumber;
    this.interval = interval;
    this.position = position;
    this.currentVelocity = velocity;
  }

  updateRacer(time) {
    const amplitude = randomIntFromInterval(0, 5);
    const frequency = randomIntFromInterval(0, 1);
    this.currentVelocity = this.velocity + (amplitude * Math.sin((2 * Math.PI * frequency) * (time / 1000)));
    const angularVelocityRad = this.currentVelocity / trackRadius;
    this.angularVelocity += angularVelocityRad;
    // const degrees = (racer.pos * 57.2957795130823208767981548141) % trackCircumference;
    const angle = this.angularVelocity % (2 * Math.PI);

    // Note that the addition of the radius and (35 + 2) (radius of the car)
    // is used as an offset to center the car on the track assuming the track
    // is a circle and the center of the circle is at w/2, h/2.. This could be
    // rectified by adding an offset of the origin of the circle
    const offset = trackRadius + (35 / 2);
    this.x = (trackRadius * Math.cos(angle)) + offset;
    this.y = (trackRadius * Math.sin(angle)) + offset;
    console.log(angle);
  }

  drawRacer(ctx, colour) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 35, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const trackCircumference = 3000; // meters
const trackRadius = trackCircumference / (2 * Math.PI);

const Canvas = (props) => {
  const canvasRef = React.useRef(null);
  const [time, setTime] = React.useState(0);
  const height = 1000;
  const width = 1000;

  // The interval at which the track rerenders
  const timeStep = 16.6; // ms

  // The initial racer position
  // let racerPosition = 0;

  const drawTrack = ctx => {
    // Track
    ctx.beginPath();
    ctx.arc(500, 500, trackRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.stroke();

    // Timing circle
    ctx.beginPath();
    ctx.arc(500, 500, 200, 0, 2 * Math.PI);
    ctx.strokeStyle = 'lightblue';
    ctx.lineWidth = 10;
    ctx.stroke();
  };

  const draw = ctx => {
    if (props.status === true) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      drawTrack(ctx);
      try {
        for (const racer of props.racers) {
          // if (racer.alias === 'HAM') {
          //   racer.velocity = 6;
          // } else if (racer.alias === 'VER') {
          //   racer.velocity = 3;
          // }
          console.log(racer);
          racer.updateRacer(time);
          racer.drawRacer(ctx, racer.racerColour);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Redraw the canvas when the time or racers variables are updated
  useEffect(() => {
    setInterval(() => {
      setTime(time => time + 1);
    }, timeStep);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context);
  }, [time, props.racers]);

  return (
    <canvas ref={canvasRef} height={height} width={width}/>
  );
};

export default Canvas;
