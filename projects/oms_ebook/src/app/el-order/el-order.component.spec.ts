import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElOrderComponent } from './el-order.component';

describe('ElOrderComponent', () => {
  let component: ElOrderComponent;
  let fixture: ComponentFixture<ElOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
