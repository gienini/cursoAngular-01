import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ['SPiderman', 'Ironman', 'Thor', 'Superman'];
  heroeBorrado: string |undefined = undefined;

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();
  }
}
