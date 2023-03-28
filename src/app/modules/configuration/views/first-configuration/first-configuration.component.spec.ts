import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstConfigurationComponent } from './first-configuration.component';

describe('FirstConfigurationComponent', () => {
  let component: FirstConfigurationComponent;
  let fixture: ComponentFixture<FirstConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
