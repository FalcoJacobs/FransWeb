import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseComposeComponent } from './passe-compose.component';

describe('PasseComposeComponent', () => {
  let component: PasseComposeComponent;
  let fixture: ComponentFixture<PasseComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasseComposeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasseComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
