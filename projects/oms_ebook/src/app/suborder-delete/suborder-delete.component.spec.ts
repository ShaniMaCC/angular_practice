import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborderDeleteComponent } from './suborder-delete.component';

describe('SuborderDeleteComponent', () => {
  let component: SuborderDeleteComponent;
  let fixture: ComponentFixture<SuborderDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborderDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
