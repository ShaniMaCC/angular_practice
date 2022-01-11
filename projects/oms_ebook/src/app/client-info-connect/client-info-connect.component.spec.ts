import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoConnectComponent } from './client-info-connect.component';

describe('ClientInfoConnectComponent', () => {
  let component: ClientInfoConnectComponent;
  let fixture: ComponentFixture<ClientInfoConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientInfoConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
