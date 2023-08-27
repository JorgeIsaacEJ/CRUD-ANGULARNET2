import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersonasComponent } from './vista-personas.component';

describe('VistaPersonasComponent', () => {
  let component: VistaPersonasComponent;
  let fixture: ComponentFixture<VistaPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
