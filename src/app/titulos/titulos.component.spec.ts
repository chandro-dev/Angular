import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosComponent } from './titulos.component';

describe('TitulosComponent', () => {
  let component: TitulosComponent;
  let fixture: ComponentFixture<TitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
