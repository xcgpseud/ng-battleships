import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Board } from '../models/board';
import { ShipService } from '../services/ship.service';
import { Point } from '../models/point';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Board;

  constructor(
    private cdr: ChangeDetectorRef,
    private shipService: ShipService
  ) { }

  ngOnInit() {

    this.board = new Board(10, 10);
    this.shipService = new ShipService();
    this.shipService.setParams(this.board.width, this.board.height);

    this.board.ships.push(this.shipService.getRandomShip(this.board.ships, 5));
    this.board.ships.push(this.shipService.getRandomShip(this.board.ships, 4));
    this.board.ships.push(this.shipService.getRandomShip(this.board.ships, 4));
  }

  hitPoint(event, point): void {

    this.board.getPoint(point.x, point.y).hitPoint();
    let ship = this.shipService.getRandomShip(this.board.ships, 4);
    console.log(ship);
  }

  pointContainsShip(point: Point): boolean {

    let containsShip = false;
    this.board.ships.forEach(ship => {
        let shipPoints = ship.getPoints();
        shipPoints.forEach(shipPoint => {
            if (shipPoint.x == point.x && shipPoint.y == point.y) {
                containsShip = true;
                return;
            }
        })
    });
    return containsShip;
}

  getPointClass(point: Point) {
    
    if (this.pointContainsShip(point)) {
        return "point has-ship";
    }
    if (point.hit) {
        return "point hit";
    } else {
        return "point unhit";
    }
}

}
