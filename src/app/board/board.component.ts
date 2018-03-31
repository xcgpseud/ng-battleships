import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Board;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.board = new Board(10, 10);
  }

  hitPoint(event, point): void {
    this.board.getPoint(point.x, point.y).hitPoint();
  }

}
