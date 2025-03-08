import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugaisonTableComponent } from './conjugaison-table.component';

describe('ConjugaisonTableComponent', () => {
  let component: ConjugaisonTableComponent;
  let fixture: ComponentFixture<ConjugaisonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjugaisonTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjugaisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
