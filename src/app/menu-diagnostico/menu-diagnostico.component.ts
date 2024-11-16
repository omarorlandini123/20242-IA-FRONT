import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu-diagnostico',
  standalone: true,
  imports: [RouterLink, AppComponent],
  templateUrl: './menu-diagnostico.component.html',
  styleUrl: './menu-diagnostico.component.scss'
})
export class MenuDiagnosticoComponent {

}
