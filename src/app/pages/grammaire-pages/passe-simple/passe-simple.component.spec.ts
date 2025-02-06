import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseSimpleComponent } from './passe-simple.component';

describe('PasseSimpleComponent', () => {
  let component: PasseSimpleComponent;
  let fixture: ComponentFixture<PasseSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasseSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasseSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
