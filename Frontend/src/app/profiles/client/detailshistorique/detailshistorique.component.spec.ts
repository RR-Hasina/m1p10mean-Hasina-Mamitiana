import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshistoriqueComponent } from './detailshistorique.component';

describe('DetailshistoriqueComponent', () => {
  let component: DetailshistoriqueComponent;
  let fixture: ComponentFixture<DetailshistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailshistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailshistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
