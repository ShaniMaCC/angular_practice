import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeGroupSettingComponent } from './trade-group-setting.component';

describe('TradeGroupSettingComponent', () => {
  let component: TradeGroupSettingComponent;
  let fixture: ComponentFixture<TradeGroupSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeGroupSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeGroupSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
