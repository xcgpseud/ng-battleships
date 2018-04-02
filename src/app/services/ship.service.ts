import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Ship } from '../models/ship';
import { Point } from '../models/point';

@Injectable()
export class ShipService {

  width: number;
  height: number;

  constructor() { }

  setParams(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  getRandomShip(ships: Array<Ship>, length: number): Ship {

    // It's doing 1 more than it should so just cut this down here instead of everywhere else
    length--;
    let possibleShips = this.generatePossibleShips(ships, length);
    let randomShip = possibleShips[Math.floor(Math.random() * possibleShips.length)];
    return randomShip;
  }

  generatePossibleShips(boardShips: Array<Ship>, length: number): Array<Ship> {

    let ships = this.generateAllShips(length);
    let nonIntersectingShips = this.getNonIntersectingShips(ships, boardShips);
    return nonIntersectingShips;
  }

  getNonIntersectingShips(ships: Array<Ship>, currentShips: Array<Ship>): Array<Ship> {

    let nonIntersectingShips = Array<Ship>();
    ships.forEach(ship => {
      let intersects = false;
      currentShips.forEach(currentShip => {
        intersects = this.shipsIntersect(ship, currentShip);
        if (intersects) {
          return;
        }
      });
      if (!intersects) {
        nonIntersectingShips.push(ship);
      }
    })
    return nonIntersectingShips;
  }

  shipsIntersect(ship: Ship, otherShip: Ship): boolean {

    let intersects = false;

    ship.getPoints().forEach(s => {
      otherShip.getPoints().forEach(o => {
        if (s.x == o.x && s.y == o.y) {
          intersects = true;
          return;
        }
      })
    });

    return intersects;

  }

  // todo: intersects, remove intersecting, return free ship on given board

  private generateAllShips(length: number): Array<Ship> {

    let ships = Array<Ship>();

    this.fillHorizontal(ships, length);
    this.fillVertical(ships, length);

    return ships;
  }

  private fillHorizontal(ships: Array<Ship>, length: number): void {

    for (let x = 1; x <= this.width - length; x++) {
      for (let y = 1; y <= this.height; y++) {
        ships.push(new Ship(
          new Point(0, x, y),
          new Point(0, x + length, y)
        ))
      }
    }
  }

  private fillVertical(ships: Array<Ship>, length: number): void {
    
    for (let x = 1; x <= this.width; x++) {
      for (let y = 1; y <= this.height - length; y++) {
        ships.push(new Ship(
          new Point(0, x, y),
          new Point(0, x, y + length)
        ));
      }
    }
  }

}
