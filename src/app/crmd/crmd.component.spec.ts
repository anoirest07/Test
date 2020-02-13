import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmdComponent } from './crmd.component';

describe('CrmdComponent', () => {
  let component: CrmdComponent;
  let fixture: ComponentFixture<CrmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
