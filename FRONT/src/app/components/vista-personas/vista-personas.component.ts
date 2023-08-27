import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-vista-personas',
  templateUrl: './vista-personas.component.html',
  styleUrls: ['./vista-personas.component.css']
})
export class VistaPersonasComponent {
  listaPersonas: Persona[] = [];
  listaPersonasFiltrado: Persona[] = [];

  constructor(private _personaservice: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
    this.listaPersonasFiltrado = this.listaPersonas;
  }

  getPersonas() {
    this._personaservice.getPersonas().subscribe(data => {
      this.listaPersonas = data;
      this.listaPersonasFiltrado = this.listaPersonas;
      console.log(data);
    }, error => {
      console.error(error);
    })
  }

  eliminarPersona(id: number){
    this._personaservice.eliminarPersona(id).subscribe(data => {
      this.getPersonas();
    }, error => {
      console.error(error);
    })
  }

  filtrarPersonas(value: string) {
    if(!value){
      this.listaPersonasFiltrado = this.listaPersonas;
    }
    this.listaPersonasFiltrado = this.listaPersonas.filter(
      persona => persona.nombre.toLowerCase().includes(value.toLowerCase()) ||
                 persona.direccion.toLowerCase().includes(value.toLowerCase()) ||
                 persona.telefono.toLowerCase().includes(value.toLowerCase()) ||
                 persona.correo.toLowerCase().includes(value.toLowerCase())
    )
  }

}
