import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeGroupAssociateComponent } from './trade-group-associate.component';

describe('TradeGroupAssociateComponent', () => {
  let component: TradeGroupAssociateComponent;
  let fixture: ComponentFixture<TradeGroupAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeGroupAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeGroupAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
