import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedDogListComponent } from './adopted-dog-list.component';

describe('AdoptedDogListComponent', () => {
  let component: AdoptedDogListComponent;
  let fixture: ComponentFixture<AdoptedDogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedDogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedDogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
