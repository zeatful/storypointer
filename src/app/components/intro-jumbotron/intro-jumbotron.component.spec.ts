import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroJumbotronComponent } from './intro-jumbotron.component';

describe('IntroJumbotronComponent', () => {
  let component: IntroJumbotronComponent;
  let fixture: ComponentFixture<IntroJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
