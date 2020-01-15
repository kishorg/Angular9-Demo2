import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APICallDemoComponent } from './apicall-demo.component';

describe('APICallDemoComponent', () => {
  let component: APICallDemoComponent;
  let fixture: ComponentFixture<APICallDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APICallDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APICallDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
