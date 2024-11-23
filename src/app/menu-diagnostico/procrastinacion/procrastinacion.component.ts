import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-procrastinacion',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './procrastinacion.component.html',
  styleUrl: './procrastinacion.component.scss'
})
export class ProcrastinacionComponent {

}
