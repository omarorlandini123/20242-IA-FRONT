import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { AppComponent } from '../../app.component';
import { InicioComponent } from '../../inicio/inicio.component';

@Component({
  selector: 'app-enlaces',
  standalone: true,
  imports: [RouterLink, RecursosAyudaComponent, AppComponent, InicioComponent],
  templateUrl: './enlaces.component.html',
  styleUrl: './enlaces.component.scss'
})
export class EnlacesComponent {

}
