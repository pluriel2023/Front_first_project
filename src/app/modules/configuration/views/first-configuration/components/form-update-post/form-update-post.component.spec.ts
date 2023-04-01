import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePostComponent } from './form-update-post.component';

describe('FormUpdatePostComponent', () => {
  let component: FormUpdatePostComponent;
  let fixture: ComponentFixture<FormUpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
