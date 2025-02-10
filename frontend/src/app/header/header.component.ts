import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  @Input() pageTitle!: string;
  @Input() logoSrc!: string;
}
