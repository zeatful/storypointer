import { Component, OnInit } from '@angular/core';
import { STORIES } from '../stories-mock';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story = STORIES[0];

  constructor() { }

  ngOnInit() {
  }

}
