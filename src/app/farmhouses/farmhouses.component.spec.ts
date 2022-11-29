import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmhousesComponent } from './farmhouses.component';

describe('FarmhousesComponent', () => {
  let component: FarmhousesComponent;
  let fixture: ComponentFixture<FarmhousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmhousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
