import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinfoComponent } from './heroinfo.component';

describe('HeroinfoComponent', () => {
  let component: HeroinfoComponent;
  let fixture: ComponentFixture<HeroinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
