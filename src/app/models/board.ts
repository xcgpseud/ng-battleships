import { Point } from "./point";

export class Board {
    width: number;
    height: number;
    points: Array<Array<Point>>;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

        this.points = Array<Array<Point>>();

        let idCount = 0;

        for (let y = 1; y <= this.height; y++) {
            let row = Array<Point>();
            for (let x = 1; x <= this.width; x++) {
                row.push(new Point(idCount, x, y));
                idCount++;
            }
            this.points.push(row);
        }
    }

    ngOnInit() { }

    getPoint(x: number, y: number): Point {
        this.points.forEach(row => {
            return row.find(p => p.x == x && p.y == y);
        });
        return null;
    }
}