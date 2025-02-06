import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImparfaitComponent } from './imparfait.component';

describe('ImparfaitComponent', () => {
  let component: ImparfaitComponent;
  let fixture: ComponentFixture<ImparfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImparfaitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImparfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
