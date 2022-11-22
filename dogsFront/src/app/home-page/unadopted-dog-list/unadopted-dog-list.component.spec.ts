import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadoptedDogListComponent } from './unadopted-dog-list.component';

describe('UnadoptedDogListComponent', () => {
  let component: UnadoptedDogListComponent;
  let fixture: ComponentFixture<UnadoptedDogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnadoptedDogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadoptedDogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
