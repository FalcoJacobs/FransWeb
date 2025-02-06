import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturProcheComponent } from './futur-proche.component';

describe('FuturProcheComponent', () => {
  let component: FuturProcheComponent;
  let fixture: ComponentFixture<FuturProcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturProcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturProcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
