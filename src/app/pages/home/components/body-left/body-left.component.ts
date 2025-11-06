import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'body-left-component',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyLeftComponent {}
