import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtipoComponent } from './cardtipo.component';

describe('CardtipoComponent', () => {
  let component: CardtipoComponent;
  let fixture: ComponentFixture<CardtipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
