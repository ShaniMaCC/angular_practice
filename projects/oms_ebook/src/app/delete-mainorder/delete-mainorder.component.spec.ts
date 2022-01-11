import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMainorderComponent } from './delete-mainorder.component';

describe('DeleteMainorderComponent', () => {
  let component: DeleteMainorderComponent;
  let fixture: ComponentFixture<DeleteMainorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMainorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMainorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
