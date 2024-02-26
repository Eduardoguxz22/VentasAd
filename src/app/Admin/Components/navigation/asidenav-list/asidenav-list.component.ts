import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asidenav-list',
  templateUrl: './asidenav-list.component.html',
  styleUrl: './asidenav-list.component.css',
})
export class AsidenavListComponent {
  @Input()
  name: string = '';
  @Input()
  routerLink: string = '';
}
