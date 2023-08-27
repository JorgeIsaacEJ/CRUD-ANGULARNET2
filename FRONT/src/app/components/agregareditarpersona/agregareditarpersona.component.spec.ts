import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarpersonaComponent } from './agregareditarpersona.component';

describe('AgregareditarpersonaComponent', () => {
  let component: AgregareditarpersonaComponent;
  let fixture: ComponentFixture<AgregareditarpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregareditarpersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
