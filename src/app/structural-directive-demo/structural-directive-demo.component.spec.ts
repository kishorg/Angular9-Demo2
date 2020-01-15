import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveDemoComponent } from './structural-directive-demo.component';

describe('StructuralDirectiveDemoComponent', () => {
  let component: StructuralDirectiveDemoComponent;
  let fixture: ComponentFixture<StructuralDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
