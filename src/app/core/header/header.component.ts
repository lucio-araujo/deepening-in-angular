import { Component, OnInit } from '@angular/core';
import { ITile } from './tile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tiles: ITile[] = [
    { cols: 6, rows: 1, color: "blue" },
    { cols: 3, rows: 1, color: "yellow" },
    { cols: 3, rows: 1, color: "pink" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
