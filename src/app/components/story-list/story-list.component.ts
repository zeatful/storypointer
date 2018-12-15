import { Component, OnInit } from '@angular/core';
import { STORIES } from '../stories-mock';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories = STORIES;

  constructor() { }

  ngOnInit() {
  }

}
