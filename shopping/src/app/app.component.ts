import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent, FancyButtonComponent } from '@labs/buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, FancyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping';
}
