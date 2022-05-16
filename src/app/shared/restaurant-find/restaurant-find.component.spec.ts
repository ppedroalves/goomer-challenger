import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFindComponent } from './restaurant-find.component';

describe('RestaurantFindComponent', () => {
  let component: RestaurantFindComponent;
  let fixture: ComponentFixture<RestaurantFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
