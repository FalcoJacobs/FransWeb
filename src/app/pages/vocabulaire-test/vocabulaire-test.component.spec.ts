import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireTestComponent } from './vocabulaire-test.component';

describe('VocabulaireTestComponent', () => {
  let component: VocabulaireTestComponent;
  let fixture: ComponentFixture<VocabulaireTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
