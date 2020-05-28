import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenAdComponent } from './fullscreen-ad.component';

describe('FullscreenAdComponent', () => {
  let component: FullscreenAdComponent;
  let fixture: ComponentFixture<FullscreenAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
