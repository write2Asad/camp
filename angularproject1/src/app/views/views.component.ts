import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-views',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgFor, NavigationComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

}
