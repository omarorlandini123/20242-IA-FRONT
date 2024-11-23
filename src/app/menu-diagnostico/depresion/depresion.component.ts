import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-depresion',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './depresion.component.html',
  styleUrl: './depresion.component.scss'
})
export class DepresionComponent {

}
