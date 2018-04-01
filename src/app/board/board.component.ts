import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Board } from '../models/board';
import { ShipService } from '../services/ship.service';

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
    this.shipService = new ShipService(this.board.width, this.board.height);
  }

  hitPoint(event, point): void {
    this.board.getPoint(point.x, point.y).hitPoint();
    let ship = this.shipService.getRandomShip(this.board.ships, 4);
    console.log(ship);
  }

}
