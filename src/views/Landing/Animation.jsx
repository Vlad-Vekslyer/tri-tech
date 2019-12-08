import React, {useRef, useEffect} from "react";
import HexaTriangle from "./HexaTriangle.js";

let frame = 0;
// determines whether animation should start reversing
let reverse = false;
let hexagonProps = [];

// to create a new hexagon, push an object to the hexagonProps array
hexagonProps.push({
  startX: 400,
  startY: 250,
  speedRate: 8,
  size: 150,
  delay: 80
});

hexagonProps.push({
  startX: 600,
  startY: 150,
  speedRate: 15,
  size: 50,
  delay: 50
});

hexagonProps.push({
  startX: 200,
  startY: 75,
  speedRate: 25,
  size: 50,
  delay: 10
});

hexagonProps.push({
  startX: 150,
  startY: 450,
  speedRate: 15,
  size: 30,
  delay: 10
});

hexagonProps.push({
  startX: 280,
  startY: 500,
  speedRate: 15,
  size: 30,
  delay: 50
});

hexagonProps.push({
  startX: 600,
  startY: 450,
  speedRate: 30,
  size: 30,
  delay: 80
});


function animate(context, props){
  requestAnimationFrame(() => animate(context, props));
  context.clearRect(0,0, props.width, props.height);
  hexagonProps.forEach(props => createHexagon(context, props));
  frame = reverse ? frame - 1 : frame + 1;
  if(frame == 0) reverse = false;
  else if(frame == 200) reverse = true;
}

function createHexagon(context, props){
  let {startX, startY, speedRate, delay, size} = props;
  let speed = (frame / speedRate) - (delay / speedRate);
  // don't animate if the frame is not past the delay value
  let center = frame > delay ? [startX - speed * 1.5, startY - speed] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "top", horizontal: "left"}, "#3898EC");

  center = frame > delay ? [startX, startY - speed * 1.3] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "top", horizontal: "middle"}, "#2585D9");

  center = frame > delay ? [startX + speed * 1.5, startY - speed] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "top", horizontal: "right"}, "#0D64B1");

  center = frame > delay ? [startX + speed * 1.5, startY + speed] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "bottom", horizontal: "right"}, "#3898EC");

  center = frame > delay ? [startX, startY + speed * 1.3] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "bottom", horizontal: "middle"}, "#79C1FF");

  center = frame > delay ? [startX - speed * 1.5, startY + speed] : [startX, startY];
  new HexaTriangle(center, size, {vertical: "bottom", horizontal: "left"}, "#52AAF6");
}

function Animation(props){
  let canvas = useRef(null);
  useEffect(() => {
    if(canvas.current){
      let context = canvas.current.getContext('2d');
      HexaTriangle.setContext(context);
      animate(context, props);
    }
  }, [])
  return(
    <>
      <canvas style={{position: "absolute", right: "30px"}} ref={canvas} width={props.width} height={props.height}/>
    </>
  )
}

export default Animation;
