import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugaisonResultComponent } from './conjugaison-result.component';

describe('ConjugaisonResultComponent', () => {
  let component: ConjugaisonResultComponent;
  let fixture: ComponentFixture<ConjugaisonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjugaisonResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjugaisonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
