import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttDemoComponent } from './custom-att-demo.component';

describe('CustomAttDemoComponent', () => {
  let component: CustomAttDemoComponent;
  let fixture: ComponentFixture<CustomAttDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
