import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactscreenComponent } from './contactscreen.component';

describe('ContactscreenComponent', () => {
  let component: ContactscreenComponent;
  let fixture: ComponentFixture<ContactscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
