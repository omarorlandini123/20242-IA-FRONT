import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from "./barra-lateral/barra-lateral.component";
import { ContenidoComponent } from './contenido/contenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraLateralComponent,ContenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '20242-IA-FRONT';
}
