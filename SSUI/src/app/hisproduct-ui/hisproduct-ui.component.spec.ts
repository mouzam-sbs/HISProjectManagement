import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HISProductUIComponent } from './hisproduct-ui.component';

describe('HISProductUIComponent', () => {
  let component: HISProductUIComponent;
  let fixture: ComponentFixture<HISProductUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HISProductUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HISProductUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
