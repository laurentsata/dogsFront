import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadoptedDogItemComponent } from './unadopted-dog-item.component';

describe('UnadoptedDogItemComponent', () => {
  let component: UnadoptedDogItemComponent;
  let fixture: ComponentFixture<UnadoptedDogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnadoptedDogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadoptedDogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
