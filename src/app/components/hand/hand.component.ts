import { Component, OnInit } from '@angular/core';
import { CARDS } from '../cards-mock';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  cards = CARDS;
  constructor() { }

  ngOnInit() {
  }

}
