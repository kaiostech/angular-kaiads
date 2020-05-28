import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiAdComponent } from './kai-ad.component';

describe('KaiAdComponent', () => {
  let component: KaiAdComponent;
  let fixture: ComponentFixture<KaiAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
