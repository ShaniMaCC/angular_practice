import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborderFilterComponent } from './suborder-filter.component';

describe('SuborderFilterComponent', () => {
  let component: SuborderFilterComponent;
  let fixture: ComponentFixture<SuborderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborderFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
