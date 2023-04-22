import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionComponent } from './peticion.component';

describe('PeticionComponent', () => {
  let component: PeticionComponent;
  let fixture: ComponentFixture<PeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
