import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireOfficialComponent } from './vocabulaire-official.component';

describe('VocabulaireOfficialComponent', () => {
  let component: VocabulaireOfficialComponent;
  let fixture: ComponentFixture<VocabulaireOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireOfficialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
