import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMallComponent } from './compose-mall.component';

describe('ComposeMallComponent', () => {
  let component: ComposeMallComponent;
  let fixture: ComponentFixture<ComposeMallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeMallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
