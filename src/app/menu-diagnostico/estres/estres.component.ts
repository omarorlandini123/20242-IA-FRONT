import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-estres',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './estres.component.html',
  styleUrl: './estres.component.scss'
})
export class EstresComponent {

}
