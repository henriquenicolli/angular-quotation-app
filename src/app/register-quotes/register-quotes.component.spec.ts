import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQuotesComponent } from './register-quotes.component';

describe('RegisterQuotesComponent', () => {
  let component: RegisterQuotesComponent;
  let fixture: ComponentFixture<RegisterQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
