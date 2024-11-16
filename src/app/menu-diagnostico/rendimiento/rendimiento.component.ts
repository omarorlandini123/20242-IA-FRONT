import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-rendimiento',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './rendimiento.component.html',
  styleUrl: './rendimiento.component.scss'
})
export class RendimientoComponent {

}
