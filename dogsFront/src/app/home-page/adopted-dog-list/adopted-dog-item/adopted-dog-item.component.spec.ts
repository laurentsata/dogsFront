import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedDogItemComponent } from './adopted-dog-item.component';

describe('AdoptedDogItemComponent', () => {
  let component: AdoptedDogItemComponent;
  let fixture: ComponentFixture<AdoptedDogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedDogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedDogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
