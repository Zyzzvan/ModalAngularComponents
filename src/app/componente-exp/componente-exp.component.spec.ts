import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExpComponent } from './componente-exp.component';

describe('ComponenteExpComponent', () => {
  let component: ComponenteExpComponent;
  let fixture: ComponentFixture<ComponenteExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
