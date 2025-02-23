import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDictionairyComponent } from './personal-dictionary.component';

describe('PersonalDictionairyComponent', () => {
  let component: PersonalDictionairyComponent;
  let fixture: ComponentFixture<PersonalDictionairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDictionairyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDictionairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
