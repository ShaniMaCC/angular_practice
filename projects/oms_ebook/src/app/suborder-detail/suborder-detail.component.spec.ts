import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborderDetailComponent } from './suborder-detail.component';

describe('SuborderDetailComponent', () => {
  let component: SuborderDetailComponent;
  let fixture: ComponentFixture<SuborderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
