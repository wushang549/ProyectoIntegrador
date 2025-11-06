import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyLeftComponent } from './components/body-left/body-left.component';
import { BodyRightComponent } from './components/body-right/body-right.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BodyLeftComponent, BodyRightComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToRoot() {
    this.router.navigate(['/']);
  }

  goToHome() {
    this.router.navigate(['/inicio']);
  }
}
