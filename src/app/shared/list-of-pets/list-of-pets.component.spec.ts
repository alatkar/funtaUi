import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPetsComponent } from './list-of-pets.component';

describe('ListOfPetsComponent', () => {
  let component: ListOfPetsComponent;
  let fixture: ComponentFixture<ListOfPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
