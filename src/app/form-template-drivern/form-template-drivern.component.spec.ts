import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDrivernComponent } from './form-template-drivern.component';

describe('FormTemplateDrivernComponent', () => {
  let component: FormTemplateDrivernComponent;
  let fixture: ComponentFixture<FormTemplateDrivernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateDrivernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateDrivernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
