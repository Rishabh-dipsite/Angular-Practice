import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildVCComponent } from './child-vc.component';

describe('ChildVCComponent', () => {
  let component: ChildVCComponent;
  let fixture: ComponentFixture<ChildVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
