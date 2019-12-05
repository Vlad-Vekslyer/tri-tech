import React, {useRef, useEffect} from "react";

function animate(context, canvas){
  requestAnimationFrame(animate);
  context.clearRect(0,0, canvas.height, canvas.width);
}

function createHexagon(context, startPoint, size){
  let [startX, startY] = startPoint;
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX - size, startY);
  context.lineTo(startX - (size / 2), startY - size);
  context.lineTo(startX, startY);
  context.stroke();

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX - (size / 2), startY - size);
  context.lineTo(startX - (size / 2) + size, startY - size);
  context.lineTo(startX, startY);
  context.stroke();

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX + size, startY);
  context.lineTo(startX + (size / 2), startY - size);
  context.lineTo(startX, startY);
  context.stroke();

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX + size, startY);
  context.lineTo(startX + (size / 2), startY + size);
  context.lineTo(startX, startY);
  context.stroke();

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX - (size / 2), startY + size);
  context.lineTo(startX - (size / 2) + size, startY + size);
  context.lineTo(startX, startY);
  context.stroke();

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX - size, startY);
  context.lineTo(startX - (size / 2), startY + size);
  context.lineTo(startX, startY);
  context.stroke();
}

function Animation(){
  let canvas = useRef(null);
  useEffect(() => {
    if(canvas.current){
      let context = canvas.current.getContext('2d');
      createHexagon(context, [200, 200], 100);
    }
  }, [])
  return(
    <>
      <canvas style={{border: "2px solid black", marginTop: "100px", marginLeft: "100px"}} ref={canvas} width={640} height={425}/>
    </>
  )
}

export default Animation;
