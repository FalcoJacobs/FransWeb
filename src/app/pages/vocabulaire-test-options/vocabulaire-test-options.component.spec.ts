import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireTestOptionsComponent } from './vocabulaire-test-options.component';

describe('VocabulaireTestOptionsComponent', () => {
  let component: VocabulaireTestOptionsComponent;
  let fixture: ComponentFixture<VocabulaireTestOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireTestOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireTestOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
