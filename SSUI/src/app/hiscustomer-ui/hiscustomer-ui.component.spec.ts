import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HISCustomerUIComponent } from './hiscustomer-ui.component';

describe('HISCustomerUIComponent', () => {
  let component: HISCustomerUIComponent;
  let fixture: ComponentFixture<HISCustomerUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HISCustomerUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HISCustomerUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
