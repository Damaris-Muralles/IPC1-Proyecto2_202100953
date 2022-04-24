import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardindividualComponent } from './cardindividual.component';

describe('CardindividualComponent', () => {
  let component: CardindividualComponent;
  let fixture: ComponentFixture<CardindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
