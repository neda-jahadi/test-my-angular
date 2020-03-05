import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBeverageComponent } from './add-new-beverage.component';

describe('AddNewBeverageComponent', () => {
  let component: AddNewBeverageComponent;
  let fixture: ComponentFixture<AddNewBeverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBeverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
