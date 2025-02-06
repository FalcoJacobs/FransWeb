import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturSimpleComponent } from './futur-simple.component';

describe('FuturSimpleComponent', () => {
  let component: FuturSimpleComponent;
  let fixture: ComponentFixture<FuturSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
