import { Point } from "./point";
import { Ship } from "./ship";

export class Board {

    width: number;
    height: number;
    points: Array<Array<Point>>;
    ships: Array<Ship>;

    private foundPoint: Point;

    constructor(width: number, height: number) {
        
        this.width = width;
        this.height = height;

        this.points = Array<Array<Point>>();
        this.ships = Array<Ship>();

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

        this.foundPoint = null;

        this.points.forEach(row => {
            row.forEach(p => {
                if (p.x == x && p.y == y) {
                    this.foundPoint = p;
                }
            })
        })

        return this.foundPoint;
    }
}