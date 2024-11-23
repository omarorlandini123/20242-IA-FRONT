import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-tipo-jugador',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './tipo-jugador.component.html',
  styleUrl: './tipo-jugador.component.scss'
})
export class TipoJugadorComponent {

}
