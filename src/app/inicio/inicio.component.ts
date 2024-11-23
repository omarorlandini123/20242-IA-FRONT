import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, AppComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
