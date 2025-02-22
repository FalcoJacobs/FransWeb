import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireResultComponent } from './vocabulaire-result.component';

describe('VocabulaireResultComponent', () => {
  let component: VocabulaireResultComponent;
  let fixture: ComponentFixture<VocabulaireResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
