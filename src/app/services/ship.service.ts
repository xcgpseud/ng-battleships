import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Ship } from '../models/ship';
import { Point } from '../models/point';

@Injectable()
export class ShipService {

  board: Board;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  generatePossibleShips(length: number){
    this.board = new Board(this.width, this.height);
    this.fillBoard(length);

  }

  getNonIntersectingShips(board: Board): Array<Ship>{
    let nonIntersectingShips = Array<Ship>();
    board.ships.forEach(ship => {
      let intersects = false;
      this.board.ships.forEach(currentShip => {
        intersects = this.shipsIntersect(ship, currentShip);
        if(intersects){
          return;
        }
      });
      if(!intersects){
        nonIntersectingShips.push(ship);
      }
    })
  }

  shipsIntersect(ship: Ship, otherShip: Ship): boolean {

    let intersects = false;

    ship.getPoints().forEach(s => {
      otherShip.getPoints().forEach(o => {
        if (s.x == o.x && s.y == o.y) {
          intersects = true;
        }
      })
    });

    return intersects;

  }

  // todo: intersects, remove intersecting, return free ship on given board

  private fillBoard(length: number): void {
    this.fillHorizontal(length);
    this.fillVertical(length);
  }

  private fillHorizontal(length: number): void {
    for (let x = 1; x <= this.board.width - length; x++) {
      for (let y = 1; y <= this.board.height; y++) {
        this.board.ships.push(new Ship(
          new Point(0, x, y),
          new Point(0, x + length, y)
        ))
      }
    }
  }

  private fillVertical(length: number): void {
    for (let x = 1; x <= this.board.width; x++) {
      for (let y = 1; y <= this.board.height - length; y++) {
        this.board.ships.push(new Ship(
          new Point(0, x, y),
          new Point(0, x, y + length)
        ));
      }
    }
  }

}
