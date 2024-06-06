import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavigationComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

}
