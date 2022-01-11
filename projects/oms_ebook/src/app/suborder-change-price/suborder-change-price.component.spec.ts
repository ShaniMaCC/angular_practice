import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborderChangePriceComponent } from './suborder-change-price.component';

describe('SuborderChangePriceComponent', () => {
  let component: SuborderChangePriceComponent;
  let fixture: ComponentFixture<SuborderChangePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborderChangePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborderChangePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
