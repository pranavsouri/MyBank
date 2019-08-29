import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutoutComponent } from './aboutout.component';

describe('AboutoutComponent', () => {
  let component: AboutoutComponent;
  let fixture: ComponentFixture<AboutoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
