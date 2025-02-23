import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbMasteriesComponent } from './verb-masteries.component';

describe('VerbMasteriesComponent', () => {
  let component: VerbMasteriesComponent;
  let fixture: ComponentFixture<VerbMasteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbMasteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbMasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
