import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugaisonTestComponent } from './conjugaison-test.component';

describe('ConjugaisonTestComponent', () => {
  let component: ConjugaisonTestComponent;
  let fixture: ComponentFixture<ConjugaisonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjugaisonTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjugaisonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
