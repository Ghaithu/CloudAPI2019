import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnAPIComponent } from './mijn-api.component';

describe('MijnAPIComponent', () => {
  let component: MijnAPIComponent;
  let fixture: ComponentFixture<MijnAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
