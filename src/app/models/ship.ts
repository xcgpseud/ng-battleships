import { Point } from "./point";

export class Ship{

    start: Point;
    end: Point;

    constructor(start: Point, end: Point){
        this.start = start;
        this.end = end;
    }

}