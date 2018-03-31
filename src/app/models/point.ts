export class Point {

    constructor(id: number, x: number, y: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.hit = false;
    }

    id: number;
    x: number;
    y: number;
    hit: boolean;

    public myClass = this.hit ? "point hit" : "point unhit";

}