import { Component, OnInit } from '@angular/core';
import { CARDS } from '../cards-mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
