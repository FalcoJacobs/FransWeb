import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjonctifPresentComponent } from './subjonctif-present.component';

describe('SubjonctifPresentComponent', () => {
  let component: SubjonctifPresentComponent;
  let fixture: ComponentFixture<SubjonctifPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjonctifPresentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjonctifPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
