import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderSettingComponent } from './trader-setting.component';

describe('TraderSettingComponent', () => {
  let component: TraderSettingComponent;
  let fixture: ComponentFixture<TraderSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
