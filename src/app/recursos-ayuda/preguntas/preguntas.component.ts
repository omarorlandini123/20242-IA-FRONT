import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { AppComponent } from '../../app.component';
import { InicioComponent } from '../../inicio/inicio.component';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterLink, RecursosAyudaComponent, AppComponent, InicioComponent],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.scss'
})
export class PreguntasComponent {

}
