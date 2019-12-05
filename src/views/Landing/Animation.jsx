import React, {useRef, useEffect} from "react";

let frame = 0;

function animate(context){
  requestAnimationFrame(() => animate(context));
  context.clearRect(0,0, 640, 425);
  createHexagon(context, [200, 200], 100, frame / 1.7);
  frame++;
}

function createHexagon(context, startPoint, size, frame){
  let [startX, startY] = startPoint;
  // each of the drawings below is a triangle that composes the hexagon
  //top left
  let center = [startX - frame, startY - frame];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // top middle
  center = [startX, startY - frame];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0] - (size / 2) + size, center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // top right
  center = [startX + frame, startY - frame];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom right
  center = [startX + frame, startY + frame];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom middle
  center = [startX, startY + frame];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0] - (size / 2) + size, center[1] + size);
  context.lineTo(center[0], center[1]);
  context.stroke();
  // bottom left
  center = [startX - frame, startY + frame];
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
