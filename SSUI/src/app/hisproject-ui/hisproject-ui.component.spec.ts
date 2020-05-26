import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HISProjectUIComponent } from './hisproject-ui.component';

describe('HISProjectUIComponent', () => {
  let component: HISProjectUIComponent;
  let fixture: ComponentFixture<HISProjectUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HISProjectUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HISProjectUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
