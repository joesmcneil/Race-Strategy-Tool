import { useState, useRef, useEffect } from 'react';

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
    this.lapNo = 0;
    this.distance = 0;
    this.totalDistance = 0;
    this.stopped = false;
  }

  updateRacer(time, noOfLaps, trackLength) {
    const amplitude = randomIntFromInterval(0, 0.0000001);
    const frequency = randomIntFromInterval(0, 1);
    this.currentVelocity = (this.velocity + amplitude + frequency) + (this.velocity + (amplitude * Math.sin((2 * Math.PI * frequency) * (time / 1000))));
    const angularVelocityRad = this.currentVelocity / trackRadius;
    this.angularVelocity += angularVelocityRad;
    // const degrees = (racer.pos * 57.2957795130823208767981548141) % trackCircumference;
    const angle = this.angularVelocity % (2 * Math.PI);
    const raceLength = noOfLaps * trackLength;

    const represenativeDistance = trackLength / trackCircumference;
    const currentDistance = (angle * trackRadius) * represenativeDistance;

    let difference = currentDistance - this.distance;

    if (difference < 0) {
      difference = trackLength + difference;
      this.lapNo += 1;
      this.distance = currentDistance;
    }

    this.totalDistance += difference;

    // Stop the race
    if (this.totalDistance > raceLength) {
      this.stopped = true;
      return;
    }

    this.distance = currentDistance;

    // Note that the addition of the radius and (35 + 2) (radius of the car)
    // is used as an offset to center the car on the track assuming the track
    // is a circle and the center of the circle is at w/2, h/2.. This could be
    // rectified by adding an offset of the origin of the circle
    const offset = trackRadius + (35 / 2);
    this.x = (trackRadius * Math.cos(angle)) + offset;
    this.y = (trackRadius * Math.sin(angle)) + offset;
  }

  drawRacer(ctx, colour) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 35, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
  }

  setTimeDelta(racerAhead, time) {
    // this = current
    // racerAhead = previous

    const distance = this.totalDistance;
    const racerAheadDistance = racerAhead.totalDistance;
    const racerSpeed = (distance / 1000) / time;

    const difference = racerAheadDistance - distance;
    const delta = ((difference / (racerSpeed * 3600000)) * 1000).toFixed(2); // 3.6 x 10^6

    this.interval = delta;
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const trackCircumference = 3000; // meters
const trackRadius = trackCircumference / (2 * Math.PI);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].totalDistance >= right[j].totalDistance) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const Canvas = (props) => {
  const canvasRef = useRef(null);
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
          if (racer.stopped !== true) {
            racer.updateRacer(props.time, props.noLaps, props.trackLength);
          }
          racer.drawRacer(ctx, racer.racerColour);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Sort the array on every time update by totalDistance in descending order.
  useEffect(() => {
    if (props.status === true) {
      props.setRacers(mergeSort(props.racers));

      props.racers.forEach((racer, i) => {
        if (racer.stopped !== true) {
          if (i > 0) {
            racer.setTimeDelta(props.racers[i - 1], props.time);
          } else {
            racer.interval = 0;
          }
        }
      });
    }
  }, [props.status, props.time]);

  // Redraw the canvas when the time or racers variables are updated
  useEffect(() => {
    setInterval(() => {
      props.setTime(time => time + 1);
    }, timeStep);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context);
  }, [props.time, props.racers]);

  return (
    <canvas ref={canvasRef} height={height} width={width}/>
  );
};

export default Canvas;
