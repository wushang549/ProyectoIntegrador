import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyLeftComponent } from './components/body-left/body-left.component';
import { BodyRightComponent } from './components/body-right/body-right.component';
import { Section2Component } from './components/section2/section2.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BodyLeftComponent, BodyRightComponent, Section2Component],
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
