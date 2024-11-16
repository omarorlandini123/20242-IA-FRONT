import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { InicioComponent } from '../../inicio/inicio.component';

@Component({
  selector: 'app-consejos',
  standalone: true,
  imports: [RouterLink, AppComponent, InicioComponent],
  templateUrl: './consejos.component.html',
  styleUrl: './consejos.component.scss'
})
export class ConsejosComponent {

}
