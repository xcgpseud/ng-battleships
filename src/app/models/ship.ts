import { Point } from "./point";

export class Ship{

    start: Point;
    end: Point;

    constructor(start: Point, end: Point){
        this.start = start;
        this.end = end;
    }

    getPoints(): Array<Point> {
        let points = Array<Point>();
    
        // If ship is horizontal
        if (this.start.x < this.end.x) {
          var y = this.start.y;
          for (let x = this.start.x; x <= this.end.x; x++) {
            points.push(new Point(0, x, y));
          }
        } else {
          var x = this.start.x;
          for (let y = this.start.y; y <= this.end.y; y++) {
            points.push(new Point(0, x, y));
          }
        }
        return points;
      }

}