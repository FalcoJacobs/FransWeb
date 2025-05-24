import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireListCreationComponent } from './vocabulaire-list-creation.component';

describe('VocabulaireListCreationComponent', () => {
  let component: VocabulaireListCreationComponent;
  let fixture: ComponentFixture<VocabulaireListCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireListCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireListCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
