import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionnelPresentComponent } from './conditionnel-present.component';

describe('ConditionnelPresentComponent', () => {
  let component: ConditionnelPresentComponent;
  let fixture: ComponentFixture<ConditionnelPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionnelPresentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionnelPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
