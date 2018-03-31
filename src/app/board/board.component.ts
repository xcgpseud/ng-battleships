import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit() {
    this.board = new Board(4, 4);
  }

  hitPoint(event, point): void {
    point.hit = true;
  }

}
