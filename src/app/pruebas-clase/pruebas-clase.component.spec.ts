import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasClaseComponent } from './pruebas-clase.component';

describe('PruebasClaseComponent', () => {
  let component: PruebasClaseComponent;
  let fixture: ComponentFixture<PruebasClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
