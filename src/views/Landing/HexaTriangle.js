let context = null;

class Triangle {
  /*
    Each arg in the constructor is an array with two items representing
    the of coordinates of a point in the following pattern: [X,Y].
  */

  constructor(start, middle, end, color){
    this.start = start;
    this.middle = middle;
    this.end = end;
    this.color = color;
  }

  draw(){
    if(context){
      context.beginPath();
      context.moveTo(...this.start);
      context.lineTo(...this.middle);
      context.lineTo(...this.end);
      context.lineTo(...this.start);
      context.fillStyle = this.color;
      context.fill();
    } else throw Error('Context was not provided to Triangle Class');
  }

  // context must be set for the Triangle class before any triangles are drawn
  static setContext(ctx){
    context = ctx;
  }
}

/*
  A triangle consists of three strokes, a diagnoal stroke, a horizontal stroke and the finishing stroke which just returns back to the point where the triangle began.
  To draw a hexagon triangle, we need to compute the coordinates of the horizontal stroke and the diagonal stroke of the triangle.
  By coordinates of strokes I mean that we need to find the X and Y locations to use with the context.lineTo() in order to draw the horizontal and vertical strokes.
*/
class HexaTriangle extends Triangle {
  /*
    @center is an array repressenting the coordinates of the central point of the hexagon in the following format: [X,Y]
    @size is the length of each side of the triangle
    @position is the position of the triangle in the hexagon(i,e "top left")
  */
  constructor(center, size, position, gradientColor){
    let horizontal = HexaTriangle.getHorizontal(center, size, position);
    let diagonal = HexaTriangle.getDiagonal(center, size, position);
    let gradient = context.createLinearGradient(...HexaTriangle.getGradient(center, size, position));
    gradient.addColorStop(0, gradientColor);
    gradient.addColorStop(1, "rgba(255,255,255,0.6)");
    super(center, diagonal, horizontal, gradient);
    this.draw();
  }


  // return the coordinates needed for the triangle's horizontal stroke depending on the position of the triangle
  static getHorizontal(center, size, position){
    let middleSize = position.vertical === "top" ? -size : size;
    switch(position.horizontal){
      case "left": return [center[0] - size, center[1]];
      case "right": return [center[0] + size, center[1]];
      case "middle": return [center[0] + (size / 2), center[1] + middleSize];
      default: throw Error("Incorrect horizontal position value");
    }
  }

  // return the coordinates needed for the triangle's diagonal stroke depending on the position of the triangle
  static getDiagonal(center, size, position){
    size = position.horizontal !== "right" ? -size : size;
    switch(position.vertical){
      case "top": return [center[0] + (size / 2), center[1] - Math.abs(size)];
      case "bottom": return [center[0] + (size / 2), center[1] + Math.abs(size)];
      default: throw Error("Incorrect vertical position value")
    }
  }

  // return the coordinates needed for the triangle's linear gradient depending on the position of the triangle
  static getGradient(center, size, position){
    let x = (() => {
      switch(position.horizontal){
        case "left": return center[0] - (size / 2);
        case "right": return center[0] + (size / 2);
        case "middle": return center[0];
      }
    })();
    let y = (() => {
      switch(position.vertical){
        case "top": return center[1] - size;
        case "bottom": return center[1];
      }
    })();
    return [x, y, x, center[1] + size * 2.5];
  }
}

export default HexaTriangle;
