import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Ship } from '../models/ship';
import { Point } from '../models/point';

@Injectable()
export class ShipService {

  board: Board;

  constructor(
    width: number,
    height: number
  ) {
    // todo: Set these params properly
    this.board = new Board(width, height);
  }

  // todo: intersects, remove intersecting, return free ship on given board

  fillBoard(length: number): void {
    this.fillHorizontal(length);
    this.fillVertical(length);
  }

  fillHorizontal(length: number): void {
    for (let x = 1; x <= this.board.width - length; x++) {
      for (let y = 1; y <= this.board.height; y++) {
        this.board.ships.push(new Ship(
          new Point(0, x, y),
          new Point(0, x + length, y)
        ))
      }
    }
  }

  fillVertical(length: number): void {
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
