import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { InicioComponent } from '../../inicio/inicio.component';

@Component({
  selector: 'app-apoyo',
  standalone: true,
  imports: [RouterLink, AppComponent, RecursosAyudaComponent, InicioComponent],
  templateUrl: './apoyo.component.html',
  styleUrl: './apoyo.component.scss'
})
export class ApoyoComponent {

}
