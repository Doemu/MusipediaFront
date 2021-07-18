import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerformedCompositionComponent } from './add-performed-composition.component';

describe('AddPerformedCompositionComponent', () => {
  let component: AddPerformedCompositionComponent;
  let fixture: ComponentFixture<AddPerformedCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerformedCompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerformedCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
