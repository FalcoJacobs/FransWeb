import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulaireCommunityComponent } from './vocabulaire-community.component';

describe('VocabulaireCommunityComponent', () => {
  let component: VocabulaireCommunityComponent;
  let fixture: ComponentFixture<VocabulaireCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabulaireCommunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabulaireCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
