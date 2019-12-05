import React, {useRef, useEffect} from "react";

let frame = 0;
let reverse = false;
let randomSpots = [null, null, null, null, null ,null];
randomSpots = randomSpots.map(() =>
  // X position
 [Math.floor(Math.random() * 500),
  // Y position
  Math.floor(Math.random() * 350),
  // animation speed
  Math.floor(Math.random() * (20 - 10)  + 10),
  // animation delay
  Math.floor(Math.random() * 60)
]);

function animate(context){
  requestAnimationFrame(() => animate(context));
  context.clearRect(0,0, 640, 425);
  randomSpots.forEach(spot => createHexagon(context, [spot[0], spot[1]], 20, spot[2], spot[3]));
  frame = reverse ? frame - 1 : frame + 1;
  if(frame == 0) reverse = false;
  else if(frame == 180) reverse = true;
}

function createHexagon(context, startPoint, size, speedRate, offset){
  let [startX, startY] = startPoint;
  let speed = (frame / speedRate) - (offset / speedRate);
  // each of the drawings below is a triangle that composes the hexagon
  //top left
  let center = frame > offset ? [startX - speed, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // top middle
  center = frame > offset ? [startX, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0] - (size / 2) + size, center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // top right
  center = frame > offset ? [startX + speed, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom right
  center = frame > offset ? [startX + speed, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom middle
  center = frame > offset ? [startX, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0] - (size / 2) + size, center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom left
  center = frame > offset ? [startX - speed, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
}

function Animation(){
  let canvas = useRef(null);
  useEffect(() => {
    if(canvas.current){
      let context = canvas.current.getContext('2d');
      animate(context);
    }
  }, [])
  return(
    <>
      <canvas style={{border: "2px solid black", marginTop: "100px", marginLeft: "100px"}} ref={canvas} width={640} height={425}/>
    </>
  )
}

export default Animation;
