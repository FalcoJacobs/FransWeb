import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenseExerciseComponent } from './tense-exercise.component';

describe('TenseExerciseComponent', () => {
  let component: TenseExerciseComponent;
  let fixture: ComponentFixture<TenseExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenseExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenseExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
