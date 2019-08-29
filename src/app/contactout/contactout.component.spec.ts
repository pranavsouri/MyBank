import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoutComponent } from './contactout.component';

describe('ContactoutComponent', () => {
  let component: ContactoutComponent;
  let fixture: ComponentFixture<ContactoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
