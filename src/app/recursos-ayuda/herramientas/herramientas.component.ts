import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { InicioComponent } from '../../inicio/inicio.component';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [RouterLink, AppComponent, RecursosAyudaComponent, InicioComponent],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.scss'
})
export class HerramientasComponent {

}
