import React, {useRef, useEffect} from "react";

function animate(){
  requestAnimationFrame(animate);

}

function createHexagon(context, startPoint, size){
  context.beginPath();
  let [startX, startY] = startPoint;
  context.moveTo(startX, startY);
  context.lineTo(startX + size, startY);
  context.lineTo(startX + (size / 2), startY - size);
  context.lineTo(startX, startY);
  context.stroke();
  // context.beginPath();
  // context.moveTo(300, 300);
  // context.lineTo(200, 100);
  // context.lineTo(400, 100);
  // context.lineTo(300, 300);
  // context.stroke();
}

function Animation(){
  let canvas = useRef(null);
  useEffect(() => {
    if(canvas.current){
      let context = canvas.current.getContext('2d');
      createHexagon(context, [100, 300], 100);
      // context.beginPath();
      // context.moveTo(300, 300);
      // context.lineTo(200, 100);
      // context.lineTo(400, 100);
      // context.lineTo(300, 300);
      // context.stroke();
    }
  }, [])
  return(
    <>
      <canvas style={{border: "2px solid black", marginTop: "100px", marginLeft: "100px"}} ref={canvas} width={640} height={425}/>
    </>
  )
}

export default Animation;
