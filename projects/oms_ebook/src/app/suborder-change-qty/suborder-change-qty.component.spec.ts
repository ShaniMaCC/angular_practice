import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborderChangeQtyComponent } from './suborder-change-qty.component';

describe('SuborderChangeQtyComponent', () => {
  let component: SuborderChangeQtyComponent;
  let fixture: ComponentFixture<SuborderChangeQtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborderChangeQtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborderChangeQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
