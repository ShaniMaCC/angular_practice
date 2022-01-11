import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoAccountComponent } from './client-info-account.component';

describe('ClientInfoAccountComponent', () => {
  let component: ClientInfoAccountComponent;
  let fixture: ComponentFixture<ClientInfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientInfoAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
