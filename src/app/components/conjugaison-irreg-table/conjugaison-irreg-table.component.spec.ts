import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugaisonIrregTableComponent } from './conjugaison-irreg-table.component';

describe('ConjugaisonIrregTableComponent', () => {
  let component: ConjugaisonIrregTableComponent;
  let fixture: ComponentFixture<ConjugaisonIrregTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjugaisonIrregTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjugaisonIrregTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
