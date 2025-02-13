import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugaisonSelectComponent } from './conjugaison-select.component';

describe('ConjugaisonSelectComponent', () => {
  let component: ConjugaisonSelectComponent;
  let fixture: ComponentFixture<ConjugaisonSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjugaisonSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjugaisonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
