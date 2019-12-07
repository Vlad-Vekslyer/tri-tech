import React, {useRef, useEffect} from "react";

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
  // each of the drawings below is a triangle that composes the hexagon

  // top left
  // don't animate if the frame is not past the delay value
  let center = frame > delay ? [startX - speed * 1.5, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  let gradient = context.createLinearGradient(center[0] - (size / 2), center[1] - size, center[0] - (size / 2), center[1] + size * 1.5);
  gradient.addColorStop(0, "#3898EC");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();

  // top middle
  center = frame > delay ? [startX, startY - speed * 1.3] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] - size);
  context.lineTo(center[0] - (size / 2) + size, center[1] - size);
  context.lineTo(center[0], center[1]);
  gradient = context.createLinearGradient(center[0], center[1] - size, center[0], center[1] + size * 2.5);
  gradient.addColorStop(0, "#2585D9");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();

  // top right
  center = frame > delay ? [startX + speed * 1.5, startY - speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] - size);
  context.lineTo(center[0], center[1]);
  gradient = context.createLinearGradient(center[0] + (size / 2), center[1] - size, center[0] + (size / 2), center[1] + size * 2.5);
  gradient.addColorStop(0, "#0D64B1");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();

  // bottom right
  center = frame > delay ? [startX + speed * 1.5, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] + size, center[1]);
  context.lineTo(center[0] + (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  gradient = context.createLinearGradient(center[0] + (size / 2), center[1], center[0] + (size / 2), center[1] + size * 3);
  gradient.addColorStop(0, "#3898EC");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();

  // bottom middle
  center = frame > delay ? [startX, startY + speed * 1.3] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0] - (size / 2) + size, center[1] + size);
  context.lineTo(center[0], center[1]);
  gradient = context.createLinearGradient(center[0], center[1], center[0], center[1] + size * 3);
  gradient.addColorStop(0, "#79C1FF");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();

  // bottom left
  center = frame > delay ? [startX - speed * 1.5, startY + speed] : [startX, startY];
  context.beginPath();
  context.moveTo(center[0], center[1]);
  context.lineTo(center[0] - size, center[1]);
  context.lineTo(center[0] - (size / 2), center[1] + size);
  context.lineTo(center[0], center[1]);
  gradient = context.createLinearGradient(center[0] - (size / 2), center[1], center[0] - (size / 2), center[1] + size * 3);
  gradient.addColorStop(0, "#52AAF6");
  gradient.addColorStop(1, "rgba(255,255,255,0.6)");
  context.fillStyle = gradient;
  context.fill();
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
      <canvas style={{position: "absolute", right: "30px"}} ref={canvas} width={props.width} height={props.height}/>
    </>
  )
}

export default Animation;
