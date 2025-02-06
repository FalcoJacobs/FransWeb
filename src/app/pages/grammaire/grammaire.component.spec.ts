import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammaireComponent } from './grammaire.component';

describe('GrammaireComponent', () => {
  let component: GrammaireComponent;
  let fixture: ComponentFixture<GrammaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
