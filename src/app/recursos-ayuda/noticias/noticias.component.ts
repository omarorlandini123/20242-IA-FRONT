import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { InicioComponent } from '../../inicio/inicio.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink, AppComponent, InicioComponent, RecursosAyudaComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

}
