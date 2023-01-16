import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFinanceComponent } from './login-finance.component';

describe('LoginFinanceComponent', () => {
  let component: LoginFinanceComponent;
  let fixture: ComponentFixture<LoginFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
