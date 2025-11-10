import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section2-component',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section2Component {}
