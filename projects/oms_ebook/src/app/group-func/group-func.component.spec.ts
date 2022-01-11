import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFuncComponent } from './group-func.component';

describe('GroupFuncComponent', () => {
  let component: GroupFuncComponent;
  let fixture: ComponentFixture<GroupFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
