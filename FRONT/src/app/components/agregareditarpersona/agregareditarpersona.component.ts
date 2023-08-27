import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-agregareditarpersona',
  templateUrl: './agregareditarpersona.component.html',
  styleUrls: ['./agregareditarpersona.component.css']
})
export class AgregareditarpersonaComponent {
  agregareditarpersona: FormGroup;
  id = -1;
  persona!: Persona;

  constructor(private fb: FormBuilder, private _personaservice: PersonaService, private router: Router, private ARoute: ActivatedRoute){
    this.agregareditarpersona = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9 ]{10,}')]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
    this.id = (this.ARoute.snapshot.paramMap.get('id') === null) ? -1 : +this.ARoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void{
    this.Editar();
  }

  Editar(){
    if(this.id >= 0){
      this._personaservice.getPersona(this.id).subscribe(data => {
        this.persona = data;
        this.agregareditarpersona.patchValue({
          nombre: data.nombre,
          correo: data.correo,
          telefono: data.telefono,
          direccion: data.direccion
        })
      }, error => {
        console.error(error);
      })
    }
  }

  agregar(){
    if(this.id < 0){
      const persona: Persona = {
        nombre: this.agregareditarpersona.get('nombre')?.value,
        direccion: this.agregareditarpersona.get('direccion')?.value,
        telefono: this.agregareditarpersona.get('telefono')?.value,
        correo: this.agregareditarpersona.get('correo')?.value,
      }
      this._personaservice.crearPersona(persona).subscribe(data => {
        //this.listaPersonas = data;
        this.router.navigate(['/']);
        console.log(data);
      }, error => {
        console.error(error);
      })
    }
    else{
      const persona: Persona = {
        id: this.persona.id,
        nombre: this.agregareditarpersona.get('nombre')?.value,
        direccion: this.agregareditarpersona.get('direccion')?.value,
        telefono: this.agregareditarpersona.get('telefono')?.value,
        correo: this.agregareditarpersona.get('correo')?.value,
      }

      this._personaservice.actualizaPersona(persona).subscribe(data => {
        this.router.navigate(['/']);
        console.log(data);
      }, error => {
        console.error(error);
      })
    }
  }

  getPersona(id: number) {
    this._personaservice.getPersona(id).subscribe(data => {
      //this.listaPersonas = data;
      console.log(data);
    }, error => {
      console.error(error);
    })
  }
}
