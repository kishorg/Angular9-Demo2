import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDataServiceComponent } from './use-data-service.component';

describe('UseDataServiceComponent', () => {
  let component: UseDataServiceComponent;
  let fixture: ComponentFixture<UseDataServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseDataServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
