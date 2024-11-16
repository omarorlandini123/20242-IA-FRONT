import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';

@Component({
  selector: 'app-apoyo',
  standalone: true,
  imports: [RouterLink, AppComponent, RecursosAyudaComponent],
  templateUrl: './apoyo.component.html',
  styleUrl: './apoyo.component.scss'
})
export class ApoyoComponent {

}
