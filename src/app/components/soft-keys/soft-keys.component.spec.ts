import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftKeysComponent } from './soft-keys.component';

describe('SoftKeysComponent', () => {
  let component: SoftKeysComponent;
  let fixture: ComponentFixture<SoftKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
