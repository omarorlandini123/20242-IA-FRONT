import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [RouterLink, AppComponent, RecursosAyudaComponent],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.scss'
})
export class HerramientasComponent {

}
