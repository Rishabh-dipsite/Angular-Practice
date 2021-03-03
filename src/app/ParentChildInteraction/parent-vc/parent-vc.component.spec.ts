import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentVCComponent } from './parent-vc.component';

describe('ParentVCComponent', () => {
  let component: ParentVCComponent;
  let fixture: ComponentFixture<ParentVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
