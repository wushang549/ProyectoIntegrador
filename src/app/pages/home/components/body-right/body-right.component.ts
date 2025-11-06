import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'body-right-component',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyRightComponent {}
