import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';

@Component({
  selector: 'app-aislamiento',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent],
  templateUrl: './aislamiento.component.html',
  styleUrl: './aislamiento.component.scss'
})
export class AislamientoComponent {

}
