import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsreparationComponent } from './detailsreparation.component';

describe('DetailsreparationComponent', () => {
  let component: DetailsreparationComponent;
  let fixture: ComponentFixture<DetailsreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
