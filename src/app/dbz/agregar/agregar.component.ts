import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input('Inuevo') nuevo: Personaje = {
    nombre: 'main',
    poder: 1
  }

  constructor (private dbzService : DbzService){

  }

  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  agregar() : void{
    if(this.nuevo.nombre.trim().length === 0) {return;}

    let nuevoPersonaje :Personaje = {
      nombre : this.nuevo.nombre,
      poder : this.nuevo.poder

    }

    this.dbzService.agregarPersonaje(nuevoPersonaje);
    // this.onNuevoPersonaje.emit(nuevoPersonaje);

    // this.personajes.push(nuevoPersonaje);

    this.nuevo.poder = 0;
    this.nuevo.nombre = "";
    
  }

}
