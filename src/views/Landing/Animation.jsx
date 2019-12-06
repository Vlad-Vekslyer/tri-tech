import React, {useRef, useEffect} from "react";

let frame = 0;
// determines whether animation should start reversing
let reverse = false;
let hexagonProps = [];

// to create a new hexagon, push an object to the hexagonProps array
hexagonProps.push({
  startX: 400,
  startY: 200,
  speedRate: 20,
  size: 150,
  delay: 5
});

hexagonProps.push({
  startX: 550,
  startY: 80,
  speedRate: 15,
  size: 60,
  delay: 30
});

function animate(context, props){
  requestAnimationFrame(() => animate(context, props));
  context.clearRect(0,0, props.width, props.height);
  hexagonProps.forEach(props => createHexagon(context, props));
  frame = reverse ? frame - 1 : frame + 1;
  if(frame == 0) reverse = false;
  else if(frame == 180) reverse = true;
}

function createHexagon(context, props){
  let {startX, startY, speedRate, delay, size} = props;
  let speed = (frame / speedRate) - (delay / speedRate);
  // each of the drawings below is a triangle that composes the hexagon

  // top left
  // don't animate if the frame is not past the delay value
  let center = frame > delay ? [startX - speed, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();

  // top middle
  center = frame > delay ? [startX, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0] - (size / 2) + size, center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();

  // top right
  center = frame > delay ? [startX + speed, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();

  // bottom right
  center = frame > delay ? [startX + speed, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();

  // bottom middle
  center = frame > delay ? [startX, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0] - (size / 2) + size, center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  
  // bottom left
  center = frame > delay ? [startX - speed, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
}

function Animation(props){
  let canvas = useRef(null);
  useEffect(() => {
    if(canvas.current){
      let context = canvas.current.getContext('2d');
      animate(context, props);
    }
  }, [])
  return(
    <>
      <canvas ref={canvas} width={props.width} height={props.height}/>
    </>
  )
}

export default Animation;
