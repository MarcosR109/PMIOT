import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichajesComponent } from "./fichajes/fichajes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FichajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PMIOTIdentification';
}
