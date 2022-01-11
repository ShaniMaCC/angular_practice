import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGroupComponent } from './move-group.component';

describe('MoveGroupComponent', () => {
  let component: MoveGroupComponent;
  let fixture: ComponentFixture<MoveGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
