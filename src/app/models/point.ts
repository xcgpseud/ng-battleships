export class Point {

    constructor(id: number, x: number, y: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.hit = false;
        this.setClass();
    }

    id: number;
    x: number;
    y: number;
    hit: boolean;
    myClass: string;

    hitPoint(): void{
        this.hit = true;
        this.setClass();
    }

    setClass(): void{
        this.myClass = this.hit ? "point hit" : "point unhit";
    }

}